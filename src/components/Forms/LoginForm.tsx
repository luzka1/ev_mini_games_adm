"use client";

import React, { useState } from "react";
import { Button } from "../UI/button";
import IconInput from "../UI/IconInput";
import { KeyRound, MailIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const LoginForm = () => {
  const [login, setLogin] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useRouter();

  const user = "guest@email.com";
  const password = "guest123";

  const fetchAuthLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (user === login && pass === password) {
        Cookies.set("token", "logged");
        navigate.push("/");
      } else {
        toast.error("Usuário ou senha incorretos!");
        Cookies.remove("token");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
      <Button disabled={loading} className="w-full" type="submit">
        Acessar
      </Button>
    </form>
  );
};

export default LoginForm;
