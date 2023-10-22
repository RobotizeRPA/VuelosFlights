
import { ArticlesCardType } from "@/types"
import ArticleCard from "../ArticleCard/ArticleCard"

interface Props{
    dataArticles: ArticlesCardType[]
}


export default function Home({dataArticles}: Props){
    
    return(
            <>
            <h3 className="px-2 text-lg hidden max-sm:block py-2 text-[#441eae] font-bold">Noticias destacadas</h3>
            <section className="w-3/4 mx-auto grid grid-cols-3 gap-4 max-sm:grid-cols-1 max-sm:w-full">
            {/* <section className="flex w-full py-10 border-b-2 border-[#441eae] max-sm:py-4"> */}
                {
                    dataArticles.map(e => {
                        return <ArticleCard key={e._id} title={e.title} section={e.section} img={e.img} _id={e._id}/>
                    })
                }
            </section>
            </>
        )
}