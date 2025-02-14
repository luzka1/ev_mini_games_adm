import { api } from "@/lib/api";

interface ApiResponse<T> {
  data: T;
  status: number;
}

interface PostProps<T> {
  endpoint: string;
  data: T;
}

async function post<T>({
  endpoint,
  data,
}: PostProps<T>): Promise<ApiResponse<T>> {
  // Função POST (Envio de dados)
  try {
    const response = await api.post(endpoint, data);

    const res: ApiResponse<T> = {
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
