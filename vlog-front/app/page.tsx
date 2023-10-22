import Home from "@/components/Home/Home";
import Navbar from "@/components/Navbar/Navbar";
import { getArticles } from "./service/home.service";

export default async function App() {
  const dataArticles = await getArticles()

  return (
    <>
    <Navbar/>
      <main>
        <Home dataArticles={dataArticles}/>
      </main>
    </>
  )
}
