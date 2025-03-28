"use client";

import { toast } from "react-toastify";
import {
  ReactNode,
  useState,
  useContext,
  createContext,
  SetStateAction,
  Dispatch,
} from "react";
import { IGames, IGameConfig } from "@/interfaces/Games";
import axios from "axios";

interface IGamesContext {
  games: IGames[];
  gameConfig: IGameConfig;
  setGames: Dispatch<SetStateAction<IGames[]>>;
  loading: boolean;
  fetchGamesData: () => void;
  fetchConfigGame: (game_id: string) => void;
  resetGames: () => void;
}

const GamesContext = createContext<IGamesContext>({} as IGamesContext);

export const GamesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [games, setGames] = useState<IGames[]>([]);
  const [gameConfig, setGameConfig] = useState<IGameConfig>({} as IGameConfig);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchGamesData() {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1450));

    try {
      const res = await axios.get(`/api/games?timestamp=${Date.now()}`, {
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      });

      if (res?.data && Array.isArray(res.data) && res?.status === 200) {
        setGames(res.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("erro ao buscar dados!");
    } finally {
      setLoading(false);
    }
  }

  const fetchConfigGame = async (game_id: string) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1450));

    try {
      const res = await axios.get(`/api/config?game_id=${game_id}`);

      if (res?.data && res.status === 200) {
        setGameConfig(res.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const resetGames = () => {
    setGames([]);
  };

  return (
    <GamesContext.Provider
      value={{
        games,
        gameConfig,
        loading,
        fetchGamesData,
        fetchConfigGame,
        setGames,
        resetGames,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

export const useGamesContext = () => useContext(GamesContext);
