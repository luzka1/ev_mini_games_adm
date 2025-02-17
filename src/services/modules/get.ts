import { api } from "@/lib/api";

async function get(endpoint: string) {
  // Função GET (Recebimento de dados)

  try {
    const response = await api.get(endpoint);

    const res = {
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
