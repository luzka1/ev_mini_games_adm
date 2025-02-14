import { put } from "@/services/modules/put";

interface PutProps<T> {
  endpoint: string;
  data: T;
}

const usePut = () => {
  // Hook para atualização de dados

  const putData = async <T>({ endpoint, data }: PutProps<T>) => {
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
