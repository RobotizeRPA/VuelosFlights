'use client'
import { ArticlesCardType } from "@/types"
import ArticleCard from "../ArticleCard/ArticleCard"
import Footer from "../Footer/Footer"
import { useState } from "react"
import { getMoreArticles } from "@/app/[seccion]/service/section.service"

interface Props {
    section: string
    data: ArticlesCardType[]
}

export default function Section({section, data}: Props){
    const sectioon = section.charAt(0).toUpperCase() + section.slice(1)

    // Para agregar mas notas
    const [moreNews, setMoreNews] = useState<ArticlesCardType[]>(data)
    const [limit,setLimit] = useState<boolean>(false)
    const [counter,setCounter] = useState<number>(2)
    const lastArticles = moreNews.slice(0, moreNews.length)
    
    
    // Para traer mas notas 
    const getNews = async () => {
        const articlesPage: ArticlesCardType[] = await getMoreArticles({'section': section, 'page': counter.toString()})
        setCounter(counter + 1)
        if(articlesPage[0]?.title === 'No hay mas data'){
            setLimit(true)
        }else {
            let arrayNews: ArticlesCardType[] = [...moreNews,...articlesPage]
            setMoreNews(arrayNews)
        }
    }

    return(
        <main className="w-full mx-auto bg-primaryColor max-sm:w-full">
            <div className="text-white w-3/4 mx-auto h-25 flex flex-col justify-center gap-4 bg-">
                <h2 className="text-3xl font-bold">{sectioon}</h2>
                <p>Las noticias más recientes de todos lo que acontece con <strong>{sectioon}</strong> a nivel mundial.</p>
            </div>
            <section className="bg-white w-full">
                <article className="w-3/4 mx-auto grid grid-cols-3 gap-10 py-4 max-sm:grid-cols-2 max-sm:w-full max-sm:px-2">
                    {
                        lastArticles.map(e => {
                            return <ArticleCard key={e._id} title={e.title} section={e.section} img={e.img} _id={e._id}/>
                        })
                    }
                </article>
                {
                    !limit && <div className="my-4 w-1/6 mx-auto text-center p-2 bg-black text-white max-sm:w-2/6"><button onClick={getNews}>Mas noticias</button></div>
                }
                <div className="border-t-2 border-t-black w-full">
                    <Footer/>
                </div>
            </section>
        </main>)
}