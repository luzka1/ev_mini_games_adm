import { put } from "@/services/modules/put";

const usePut = () => {
  // Hook para atualização de dados

  const putData = async (endpoint: string, id: string, data: any) => {
    // Simulação de 1,5s de carregamento
    await new Promise((resolve) => setTimeout(resolve, 1450));
    try {
      await put(endpoint, id, data);
    } catch (error) {
      console.log(error);
    }
  };
  return { putData };
};

export default usePut;
