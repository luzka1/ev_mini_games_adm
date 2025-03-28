"use client";

import { toast } from "react-toastify";
import { ReactNode, useState, useContext, createContext } from "react";
import { IGames, IGameConfig } from "@/interfaces/Games";
import axios from "axios";

interface IGamesContext {
  games: IGames[];
  gameConfig: IGameConfig;
  loading: boolean;
  fetchGamesData: (forceUpdate?: boolean) => Promise<void>;
  fetchConfigGame: (game_id: string) => Promise<void>;
  clearGamesData: () => void;
}

const GamesContext = createContext<IGamesContext>({} as IGamesContext);

export const GamesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [games, setGames] = useState<IGames[]>([]);
  const [gameConfig, setGameConfig] = useState<IGameConfig>({} as IGameConfig);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchGamesData = async () => {
    setLoading(true);
    try {
      const timestamp = Date.now();
      const res = await axios.get(`/api/games?_=${timestamp}`, {
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },
      });

      if (res?.data && Array.isArray(res.data)) {
        setGames(res.data);
      } else {
        console.error("Dados recebidos não são um array:", res?.data);
        setGames([]);
      }
    } catch (error) {
      console.error("Erro ao buscar jogos:", error);
      toast.error("Erro ao buscar dados!");
      setGames([]);
    } finally {
      setLoading(false);
    }
  };
  const fetchConfigGame = async (game_id: string) => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/config?game_id=${game_id}`);
      if (res?.data) {
        setGameConfig(res.data);
      }
    } catch (error) {
      console.error("Config fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const clearGamesData = () => {
    setGames([]);
    setGameConfig({} as IGameConfig);
  };

  return (
    <GamesContext.Provider
      value={{
        games,
        gameConfig,
        loading,
        fetchGamesData,
        fetchConfigGame,
        clearGamesData,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

export const useGamesContext = () => useContext(GamesContext);
