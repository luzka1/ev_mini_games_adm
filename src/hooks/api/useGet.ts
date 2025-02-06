import { get } from "@/services/modules/get";

const useGet = () => {
  // Hook para atualização de dados

  const getData = async (endpoint: string) => {
    // Simulação de 1,5s de carregamento
    await new Promise((resolve) => setTimeout(resolve, 1450));
    try {
      const result = await get(endpoint);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  return { getData };
};

export default useGet;
