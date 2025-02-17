import { api } from "@/lib/api";

interface PostProps {
  endpoint: string;
  data: any;
}

async function post({ endpoint, data }: PostProps) {
  // Função POST (Envio de dados)
  try {
    const response = await api.post(endpoint, data);

    const res = {
      data: response.data,
      status: response.status,
    };

    return res;
  } catch (error) {
    console.error("Erro ao fazer requisição:", error);
    throw new Error("Erro ao enviar os dados");
  }
}

export { post };
