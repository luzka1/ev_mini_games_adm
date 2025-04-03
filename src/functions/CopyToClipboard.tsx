import { toast } from "react-toastify";

export async function CopyToClipboard(game_link: string) {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(game_link);
      toast.success("Link copiado com sucesso!");
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = game_link;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      toast.success("Link copiado com sucesso!");
    }
  } catch (err) {
    toast.error("Erro inesperado: " + err);
  }
}
