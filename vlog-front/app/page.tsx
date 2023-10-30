import Home from "@/components/Home/Home";
import Navbar from "@/components/Navbar/Navbar";
import { getArticles, getArticlesBySection } from "./service/home.service";
import { ArticlesCardType } from "@/types";

export const revalidate = 200;

export default async function App() {
  const mainArticle = await getArticles()

  // Filtro los titlos de la variable mainArticles para que sea mas facil
  let titleData = mainArticle.map((e: ArticlesCardType) => e.title).splice(0,6)

  // Pedido de peticion al back para aerolineas
  let dataAerolineas = await getArticlesBySection('aerolineas')
  dataAerolineas = dataAerolineas.filter((e:ArticlesCardType) => !titleData.includes(e.title)).splice(0,5)  
  
  // Pedido de peticion al back para aeropuertos
  let dataAeropuertos = await getArticlesBySection('aeropuertos')
  dataAeropuertos = dataAeropuertos.filter((e:ArticlesCardType) => !titleData.includes(e.title)).splice(0,5)

  // Pedido de peticion al back para fabricantes
  let dataFabricantes = await getArticlesBySection('fabricantes')
  dataFabricantes = dataFabricantes.filter((e:ArticlesCardType) => !titleData.includes(e.title)).splice(0,5)

  return (
    <>
    <Navbar/>
      <main>
        <Home mainArticle={mainArticle} dataAerolineas={dataAerolineas} dataAeropuertos={dataAeropuertos} dataFabricantes={dataFabricantes}/>
      </main>
    </>
  )
}
