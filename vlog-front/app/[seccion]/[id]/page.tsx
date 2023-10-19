import Navbar from "@/components/Navbar/Navbar";
import { getArticle } from "./service/article.service";
import FullArticle from "@/components/FullArticle/FullArticle";

export default async function ArticleApp({params}: any){
    const data = await getArticle(params.id)

    return (
    <>
        <Navbar/>
        <main className="w-3/4 mx-auto p-2 max-sm:w-full">
            <FullArticle data={data} seccion="Aeropuerto"/>
        </main>
    </>)
}