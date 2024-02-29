import { redirect } from "next/navigation";

// Manda para a rota /login quando se acessa / a raiz do projeto. Em outras palavras deixa essa rota como a principal
export async function GET(request: Request)  {
   redirect('/login')
}