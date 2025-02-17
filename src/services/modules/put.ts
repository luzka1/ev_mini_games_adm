import { api } from "@/lib/api";

interface PutProps {
  endpoint: string;
  data: any;
}

async function put({ endpoint, data }: PutProps) {
  // Função PUT (edição de dados)

  try {
    await api.put(endpoint, data);
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao editar item!");
  }
}

export { put };
