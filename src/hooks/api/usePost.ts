import { post } from "@/services/modules/post";

interface PostProps {
  endpoint: string;
  data: any;
}

const usePost = () => {
  // Hook para atualização de dados

  const postData = async ({ endpoint, data }: PostProps) => {
    // Simulação de 1,5s de carregamento
    await new Promise((resolve) => setTimeout(resolve, 1450));
    try {
      const result = await post({ endpoint, data });
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  return { postData };
};

export default usePost;
