import { toast } from "react-toastify";

export async function CopyToClipboard(game_link: string) {
  try {
    await navigator.clipboard.writeText(game_link);
    toast.success("Link copiado com sucesso!");
  } catch (err) {
    toast.error("Erro inesperado!" + err);
  }
}
