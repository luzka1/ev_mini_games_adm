import LoginForm from "@/components/Forms/LoginForm";
import Container from "@/components/UI/Container";
import Logo from "@/components/UI/Logo";
import { Info } from "lucide-react";

export default function Auth() {
  return (
    <>
      <div className="fixed md:top-5 md:left-5 top-1 left-1 w-[225px] md:w-[250px] bg-white border-2 border-blue-500 rounded-xl shadow-lg animate-fadeIn z-10">
        <div className="flex flex-col p-2 md:p-4 items-center justify-center">
          <Info className="text-blue-500" />
          <p className="font-bold text-blue-500">Para testes, utilize:</p>
          <div className="flex flex-col text-start">
            <p>
              <b>Email:</b> guest@email.com
            </p>
            <p>
              <b>Senha:</b> guest123
            </p>
          </div>
        </div>
      </div>

      <div className="h-screen flex flex-col justify-center items-center">
        <Logo className="" />

        <Container className="w-[500px] max-w-[90vw] p-8 my-12 animate-fadeIn">
          <div className="flex flex-col items-center text-center w-full gap-8">
            <div>
              <h1 className="text-xl font-bold">Seja bem-vindo(a)</h1>
              <h2 className="text-slate-500">Faça seu login</h2>
            </div>

            <LoginForm />
          </div>
        </Container>

        <div className="text-slate-500">
          Esqueceu a senha?{" "}
          <a href="#" className="text-blue-500">
            Clique aqui!
          </a>
        </div>
      </div>
    </>
  );
}
