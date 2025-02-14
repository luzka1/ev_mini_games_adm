import { api } from "@/lib/api";

interface PutProps<T> {
  endpoint: string;
  data: T;
}

async function put<T>({ endpoint, data }: PutProps<T>) {
  // Função PUT (edição de dados)

  try {
    await api.put(endpoint, data);
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao editar item!");
  }
}

export { put };
