import Navbar from "@/components/Navbar/Navbar";

import FullArticle from "@/components/FullArticle/FullArticle";
import { getArticle } from "@/app/[seccion]/[id]/service/article.service";
import AdminFullArticle from "@/components/Admin/helpers/AdminArticle";

export default async function ArticleAdminApp({params}: any){
    const data = await getArticle(params.id)

    return (
    <>
        <Navbar/>
        <main className="w-3/4 mx-auto p-2 max-sm:w-full">
            <AdminFullArticle data={data} seccion={'Aeropuerto'}/>
        </main>
    </>)
}