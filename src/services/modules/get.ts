import { api } from "@/lib/api";

interface ApiResponse<T> {
  data: T;
  status: number;
}

async function get<T>(endpoint: string): Promise<ApiResponse<T>> {
  // Função GET (Recebimento de dados)

  try {
    const response = await api.get(endpoint);

    const res: ApiResponse<T> = {
      data: response.data,
      status: response.status,
    };

    return res;
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao obter os dados");
  }
}

export { get };
