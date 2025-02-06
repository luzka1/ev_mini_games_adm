import { post } from "@/services/modules/post";

const usePost = () => {
  // Hook para realizar o envio de dados

  let response = null;
  let statusCode = null;

  const postData = async (endpoint: string, data: any) => {
    // Simulação de 1,5s de carregamento
    await new Promise(resolve => setTimeout(resolve, 1450));

    try {
      const result: any = await post(endpoint, data);
      response = result ? result.data : null;
      statusCode = result ? result.status : null;
      return { response, statusCode };
    } catch (err) {
      console.log(err);
    }
  };

  return { postData };
};

export default usePost;
