import { api } from "@/lib/api";

async function post(endpoint: string, data: unknown) {
  // Função POST (Envio de dados para api);

  let response = null;

  try {
    response = await api.post(endpoint, data);
    return response;
  } catch (error) {
    return error;
  }
}

export { post };
