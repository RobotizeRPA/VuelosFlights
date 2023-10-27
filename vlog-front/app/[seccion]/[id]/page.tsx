import Navbar from "@/components/Navbar/Navbar";
import { getArticle, getSectionArticles } from "./service/article.service";
import FullArticle from "@/components/FullArticle/FullArticle";
import Head from "next/head";
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }

export async function generateMetadata({ params, }: Props): Promise<Metadata> {
      const dataTitle = await getArticle(params.id)
  
      return {
          title: dataTitle.title,
        }
  }

export default async function ArticleApp({params}: any){
    const data = await getArticle(params.id)
    const section = params.seccion
    const dataSection = await getSectionArticles(section)
    
    return (
        <>

        <meta property="og:title" content="My page title" key="title" />
        <Navbar/>
        <main className="w-full mx-auto p-2 max-sm:w-full">
            <FullArticle data={data} seccion={section} dataSection={dataSection}/>
        </main>
    </>)
}
