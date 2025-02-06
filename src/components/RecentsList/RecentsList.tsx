"use client";

import React, { useEffect, useState } from "react";
import Container from "../UI/Container";
import { User } from "lucide-react";
import useGet from "@/hooks/api/useGet";
import { format } from "date-fns";
import { SkeletonUserCard } from "../SkeletonUserCard/SkeletonCard";

interface RecentsListProps {
  title: string;
  description?: string;
  endpoint: string;
}

interface RecentsUsers {
  name: string;
  email: string;
  played_date: string;
  createdAt: string;
  photo: string;
}

export const RecentsList = ({
  title,
  description,
  endpoint,
}: RecentsListProps) => {
  const [users, setUsers] = useState<RecentsUsers[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { getData } = useGet();

  useEffect(() => {
    setUsers([]);
    async function fetchUsersData() {
      setLoading(true);
      try {
        const res = await getData(`${endpoint}`);
        if (res?.data && Array.isArray(res.data) && res?.status === 200) {
          setUsers(res.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsersData();
  }, [endpoint]);

  return (
    <Container className="w-full h-full p-4 flex flex-col">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-md text-muted-foreground">{description}</p>
      </div>

      <ul className="flex flex-col gap-4 mt-4 h-full overflow-y-auto">
        {loading ? (
          <>
            <SkeletonUserCard />
            <SkeletonUserCard />
            <SkeletonUserCard />
          </>
        ) : users.length <= 0 ? (
          <div className="flex items-center justify-center h-full w-full">
            <span>Nenhum usuário encontrado!</span>
          </div>
        ) : (
          users.map((item, index) => (
            <li key={index} className="flex flex-col">
              <div className="flex items-center gap-4">
                <div
                  style={{ backgroundColor: item.photo }}
                  className="rounded-full p-2"
                >
                  <User />
                </div>
                <div className="flex flex-col leading-none tracking-tight">
                  <span className="text-xl font-bold">{item.name}</span>
                  <p className="text-md text-muted-foreground">
                    {format(new Date(item.played_date), "dd/MM/yyyy")} -
                    {format(new Date(item.createdAt), "hh:mm")}
                  </p>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </Container>
  );
};
