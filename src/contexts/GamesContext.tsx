"use client";

import useGet from "@/hooks/api/useGet";
import { toast } from "react-toastify";
import {
  ReactNode,
  useState,
  useContext,
  createContext,
  SetStateAction,
  Dispatch,
} from "react";
import { IGames } from "@/interfaces/Games";

interface IGamesContext {
  games: IGames[];
  setGames: Dispatch<SetStateAction<IGames[]>>;
  loading: boolean;
  fetchGamesData: () => void;
}

const GamesContext = createContext<IGamesContext>({} as IGamesContext);

export const GamesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { getData } = useGet();
  const [games, setGames] = useState<IGames[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchGamesData() {
    setLoading(true);

    try {
      const res = await getData("/games");

      console.log(res);

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

  return (
    <GamesContext.Provider
      value={{
        games,
        loading,
        fetchGamesData,
        setGames,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

export const useGamesContext = () => useContext(GamesContext);
