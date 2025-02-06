import { api } from "@/lib/api";

async function exclude(endpoint: string, code: unknown) {
  // Função DELETE (exclusão de dados)

  try {
    const response = await api.delete(endpoint + code);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao excluir item!");
  }
}

export { exclude };
