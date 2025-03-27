"use client";

import { IPlayersList } from "@/interfaces/Lists/PlayersList";
import { toast } from "react-toastify";
import { ReactNode, useState, useContext, createContext } from "react";
import axios from "axios";

interface IPlayersTableContext {
  players: IPlayersList;
  loading: boolean;
  fetchPlayersData: (id: string) => void;
}

const PlayersTableContext = createContext<IPlayersTableContext>(
  {} as IPlayersTableContext
);

export const PlayersTableProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [players, setPlayers] = useState<IPlayersList>({} as IPlayersList);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchPlayersData(game_id: string) {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1450));

    try {
      const res = await axios.get(`/api/users?game_id=${game_id}`);

      if (res?.data && res?.status === 200) {
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
      }}
    >
      {children}
    </PlayersTableContext.Provider>
  );
};

export const usePlayersTableContext = () => useContext(PlayersTableContext);
