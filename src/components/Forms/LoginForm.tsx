"use client";

import React, { useState } from "react";
import { Button } from "../UI/button";
import IconInput from "../UI/IconInput";
import { KeyRound, MailIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useRouter();

  function fetchAuthLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate.push("/");
  }

  return (
    <form
      className="h-full flex justify-center items-center flex-col w-full gap-6"
      onSubmit={(e) => fetchAuthLogin(e)}
    >
      <IconInput
        type="email"
        onChange={(e) => setLogin(e.target.value)}
        value={login}
        placeholder="Insira seu e-mail"
        icon={<MailIcon className="text-blue-500" />}
        required
      />
      <IconInput
        type="password"
        onChange={(e) => setPass(e.target.value)}
        value={pass}
        placeholder="Insira sua senha"
        icon={<KeyRound className="text-blue-500" />}
        required
      />
      <Button className="w-full" type="submit">
        Acessar
      </Button>
    </form>
  );
};

export default LoginForm;
