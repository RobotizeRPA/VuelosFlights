import Home from "@/components/Home/Home";
import Navbar from "@/components/Navbar/Navbar";
import { getArticles } from "./service/home.service";

export const revalidate = 200;

export default async function App() {
  const dataArticles = await getArticles()
  const mainArticle = dataArticles.slice(0,5)

  return (
    <>
    <Navbar/>
      <main>
        <Home dataArticles={dataArticles} mainArticle={mainArticle}/>
      </main>
    </>
  )
}
