'use client'
import { ArticlesCardType, MainArticleType } from "@/types"
import ArticleCard from "../ArticleCard/ArticleCard"
import ArticleMain from "../ArticleCard/ArticleMain"
import {useState} from 'react'
import { getMoreArticles } from "./service/home.service"
import Footer from "../Footer/Footer"
import ArticleMainDos from "../ArticleCard/ArticleMainDos"
interface Props{
    dataArticles: ArticlesCardType[]
    mainArticle: MainArticleType[]
}


export default function Home({dataArticles, mainArticle}: Props){

    dataArticles = dataArticles.slice(4,dataArticles.length - 1)
    // Para agregar mas notas
    const [moreArticles, setMoreNews] = useState<ArticlesCardType[]>(dataArticles)
    const [limit,setLimit] = useState<boolean>(false)
    const [counter,setCounter] = useState<number>(2)
    const lastArticles = moreArticles.slice(1, moreArticles.length)


    // Para traer mas notas 
    const getNews = async () => {
        const articlesPage: ArticlesCardType[] = await getMoreArticles(counter.toString())
        setCounter(counter + 1)
        if(articlesPage[0]?.title === 'No hay mas data'){
            setLimit(true)
        }else {
            let arrayNews: ArticlesCardType[] = [...moreArticles,...articlesPage]
            setMoreNews(arrayNews)
        }
    }

    return(
            <>
            <h4 className="w-3/4 mx-auto px-2 font-bold text-2xl border-b-2 border-b-black max-sm:col-span-2 max-sm:w-full">Noticias mas destacadas</h4>
            <ArticleMainDos mainArticles={mainArticle}/>
            <section className="w-3/4 mx-auto grid grid-cols-3 gap-4 max-sm:grid-cols-2 max-sm:w-full max-sm:gap-2 max-sm:px-2">
                <h4 className="grid col-span-3 px-2 font-bold text-2xl border-b-2 border-b-black max-sm:col-span-2">Mas noticias sobre el tema</h4>
            {/* <section className="flex w-full py-10 border-b-2 border-[#441eae] max-sm:py-4"> */}
                {
                    lastArticles.map(e => {
                        return <ArticleCard key={e._id} title={e.title} section={e.section} img={e.img} _id={e._id}/>
                    })
                }
            </section>
                {
                    !limit && <div className="my-4 w-1/6 mx-auto text-center p-2 bg-black text-white max-sm:w-2/6"><button onClick={getNews}>Mas noticias</button></div>
                }
            <div className="border-t-2 border-t-black w-full">
                <Footer/>    
            </div>
            </>
        )
}