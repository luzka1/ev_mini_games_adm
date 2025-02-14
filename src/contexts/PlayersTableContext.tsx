"use client";

import useGet from "@/hooks/api/useGet";
import { IPlayersList } from "@/interfaces/Lists/PlayersList";
import { toast } from "react-toastify";
import {
  ReactNode,
  useState,
  useContext,
  createContext,
  SetStateAction,
  Dispatch,
} from "react";

interface IPlayersTableContext {
  players: IPlayersList[];
  setPlayers: Dispatch<SetStateAction<IPlayersList[]>>;
  loading: boolean;
  fetchPlayersData: () => void;
}

const PlayersTableContext = createContext<IPlayersTableContext>(
  {} as IPlayersTableContext
);

export const PlayersTableProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { getData } = useGet();
  const [players, setPlayers] = useState<IPlayersList[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchPlayersData() {
    setLoading(true);

    try {
      const res = await getData("/users");

      if (res?.data && Array.isArray(res.data) && res?.status === 200) {
        setPlayers(res.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("erro ao buscar dados!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <PlayersTableContext.Provider
      value={{
        players,
        loading,
        fetchPlayersData,
        setPlayers,
      }}
    >
      {children}
    </PlayersTableContext.Provider>
  );
};

export const usePlayersTableContext = () => useContext(PlayersTableContext);
