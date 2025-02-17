import { put } from "@/services/modules/put";

interface PutProps {
  endpoint: string;
  data: any;
}

const usePut = () => {
  // Hook para atualização de dados

  const putData = async ({ endpoint, data }: PutProps) => {
    // Simulação de 1,5s de carregamento
    await new Promise((resolve) => setTimeout(resolve, 1450));
    try {
      await put({ endpoint, data });
    } catch (error) {
      console.log(error);
    }
  };
  return { putData };
};

export default usePut;
