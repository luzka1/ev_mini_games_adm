import { post } from "@/services/modules/post";

interface PostProps<T> {
  endpoint: string;
  data: T;
}

const usePost = () => {
  // Hook para atualização de dados

  const postData = async <T>({ endpoint, data }: PostProps<T>) => {
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
