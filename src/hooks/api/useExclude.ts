import { exclude } from "@/services/modules/exclude";

const useExclude = () => {
  // Hook para realizar a requisição de exlusão de dados

  const excludeData = async (endpoint: string, id: string) => {
    // Simulação de 1,5s de carregamento
    await new Promise((resolve) => setTimeout(resolve, 1450));

    try {
      await exclude(endpoint, id);
    } catch (error) {
      console.log(error);
    }
  };

  return { excludeData };
};

export default useExclude;
