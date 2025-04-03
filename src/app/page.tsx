import { ChartLine, Joystick } from "lucide-react";
import { PageLayout } from "./pageLayout";
import { Areachart } from "@/components/Charts/Areachart";
import { CarouselSpacing } from "@/components/Carousel/CarouselSpacing";
import Container from "@/components/UI/Container";
import { RecentsList } from "@/components/RecentsList/RecentsList";
import { Counter } from "@/functions/Counter";

export default function Home() {
  return (
    <>
      <PageLayout>
        <HomeArea />
      </PageLayout>
    </>
  );
}

const HomeArea = () => {
  const users_reached = 2534.0;
  const registered_users = 7422.0;

  return (
    <div className="w-full h-full pt-8 flex flex-col gap-4 md:gap-8">
      <div className="">
        <h1 className="text-xl md:text-3xl font-bold">Bom dia Convidado</h1>
        <span className="text-sm md:text-base">
          Espero que seu dia seja ótimo!
        </span>
      </div>

      <Container className="p-4 gap-4 flex flex-col md:flex-row">
        <div className="flex flex-col justify-center h-full gap-2 w-full md:w-1/4 leading-none tracking-tight">
          <p className="text-sm md:text-base text-muted-foreground">
            Desde janeiro 2025
          </p>
          <h2 className="text-lg md:text-2xl font-bold">Análise de Usuários</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-4 h-auto justify-between w-full">
          <div className="h-full bg-slate-100 dark:bg-zinc-900 rounded-xl p-4 flex flex-col justify-between w-full md:w-1/2">
            <div className="flex flex-col gap-2 font-medium">
              <ChartLine className="w-8 h-8 md:w-12 md:h-12" />
              <span className="text-sm md:text-base">
                Total de usuários alcançados
              </span>
            </div>
            <div className="font-extrabold text-4xl md:text-6xl leading-none tracking-tight">
              <Counter max={users_reached} />
            </div>
          </div>
          <div className="h-full bg-slate-100 dark:bg-zinc-900 rounded-xl p-4 flex flex-col justify-between w-full md:w-1/2">
            <div className="flex flex-col gap-2 font-medium">
              <Joystick className="w-8 h-8 md:w-12 md:h-12" />
              <span className="text-sm md:text-base">Vezes jogadas</span>
            </div>
            <div className="font-extrabold text-4xl md:text-6xl leading-none tracking-tight">
              <Counter max={registered_users} />
            </div>
          </div>
        </div>
      </Container>

      <div className="flex flex-col md:flex-row gap-4 md:max-h-[55vh]">
        <div className="w-full md:w-1/2">
          <Areachart areaColor="#2b7fff" />
        </div>

        <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 h-96 md:h-auto">
            <RecentsList
              title="Usuários recentes"
              description="Que jogaram nas últimas 24h"
            />
          </div>

          <div className="w-full md:w-1/2 h-96 md:h-auto">
            <RecentsList
              title="Cadastros recentes"
              description="Que se cadastraram nas últimas 24h"
            />
          </div>
        </div>
      </div>

      <Container className="flex flex-col gap-4 p-4">
        <div>
          <h1 className="text-lg md:text-2xl font-bold">
            Conheça os jogos disponíveis
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Esses são os jogos disponíveis atualmente
          </p>
        </div>
        <div className="w-full h-80">
          <CarouselSpacing />
        </div>
      </Container>
    </div>
  );
};
