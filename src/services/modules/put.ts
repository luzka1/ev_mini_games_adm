import { api } from "@/lib/api";

async function put(endpoint: string, id: string, data: unknown) {
  // Função PUT (edição de dados)

  try {
    await api.put(endpoint + id, data);
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao editar item!");
  }
}

export { put };
