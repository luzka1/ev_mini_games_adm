import LoginForm from "@/components/Forms/LoginForm";
import Container from "@/components/UI/Container";
import Logo from "@/components/UI/Logo";

export default function Auth() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Logo className="" />

      <Container className="w-[500px] max-w-[90vw] p-8 my-12 animate-fadeIn dark:bg-zinc-900 dark:text-white">
        <div className="flex flex-col items-center text-center w-full gap-8">
          <div>
            <h1 className="text-xl font-bold">Seja bem-vindo(a)</h1>
            <h2 className="text-slate-500 dark:text-white">Faça seu login</h2>
          </div>

          <LoginForm />
        </div>
      </Container>
    </div>
  );
}
