import { MainArticleType } from "@/types"
import ArticleMain from "./ArticleMain"
import ArticleBig from "./ArticleBig"

interface Props {
    mainArticles: MainArticleType[]
}


export default function ArticleMainDos({mainArticles}: Props) {
    return(
        <section className="grid grid-cols-4 w-3/4 mx-auto py-4 gap-1 max-sm:grid-cols-2 max-sm:w-full max-sm:p-2">
            <h4 className="grid col-span-4 font-bold text-3xl border-b-2 border-b-primaryColor max-sm:col-span-2 text-primaryColor">Noticias mas destacadas</h4>
            <div className='h-full bg-no-repeat bg-cover bg-center row-span-2 col-span-2 relative max-sm:hidden' style={{ backgroundImage: `url(${mainArticles[0].img})` }}>
                <ArticleBig key={mainArticles[0]._id} title={mainArticles[0].title} section={mainArticles[0].section} _id={mainArticles[0]._id} summary={mainArticles[0].summary} date={mainArticles[0].date}/>
            </div>
            <div className='h-30 bg-no-repeat bg-cover bg-center relative' style={{ backgroundImage: `url(${mainArticles[1].img})` }}>
                <ArticleMain key={mainArticles[1]._id} title={mainArticles[1].title} section={mainArticles[1].section} _id={mainArticles[1]._id} summary={mainArticles[1].summary} date={mainArticles[1].date}/>
            </div>
            <div className='h-30 bg-no-repeat bg-cover bg-center relative' style={{ backgroundImage: `url(${mainArticles[2].img})` }}>
                <ArticleMain key={mainArticles[2]._id} title={mainArticles[2].title} section={mainArticles[2].section} _id={mainArticles[2]._id} summary={mainArticles[2].summary} date={mainArticles[2].date}/>
            </div>
            <div className='h-30 bg-no-repeat bg-cover bg-center relative' style={{ backgroundImage: `url(${mainArticles[3].img})` }}>
                <ArticleMain key={mainArticles[3]._id} title={mainArticles[3].title} section={mainArticles[3].section} _id={mainArticles[3]._id} summary={mainArticles[3].summary} date={mainArticles[3].date}/>
            </div>
            <div className='h-30 bg-no-repeat bg-cover bg-center relative' style={{ backgroundImage: `url(${mainArticles[4].img})` }}>
                <ArticleMain key={mainArticles[4]._id} title={mainArticles[4].title} section={mainArticles[4].section} _id={mainArticles[4]._id} summary={mainArticles[4].summary} date={mainArticles[4].date}/>
            </div>
        </section>)
}