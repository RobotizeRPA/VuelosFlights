'use client'

import { useState } from "react"
// import { getSearchNews } from "./service/search.service"
// import { NewModel } from "@/type"
// import SearchCard from "./SearchCard/SearchCard"
import NotFound from "../NotFound/NotFound"
import { ArticlesCardType } from "@/types"
import SearchCard from "./SearchCard"
import { getSearchArticles } from "./service/search.service"

export default function Search(){
    const [inputText, setInputText] = useState('')
    const [articles, setArticles] = useState<ArticlesCardType[]>([])
    const [notFound,setNotFound] = useState<string>('')

    const requestData = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const data = await getSearchArticles(inputText)
            if(data[0].title === 'No hay data'){
                setNotFound('No encontramos informacion relacionado a ese texto')
            }else {
                setArticles(data)
                setNotFound('')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return(<>
        {/* <form className="py-2 w-full flex justify-center items-center mx-auto gap-2"> */}
        <form onSubmit={(e) => requestData(e)} className="py-8 w-full flex justify-center items-center mx-auto gap-2">
            <input name='inputText' value={inputText} type="text" placeholder="Busca las ultimas noticias" onChange={(e) => setInputText(e.target.value)} className="w-5/6 border-2 px-2 rounded-lg border-black"/>
            <button className="border-2 px-6 rounded-lg border-black">Search</button>
        </form>
        {
            notFound === ''
            ?   <article className="flex flex-col gap-2">
                    {
                        articles && articles?.map(e => {
                            return <SearchCard key={e._id} _id={e._id} title={e.title} img={e.img} section={e.section}/>
                        })
                    }
                </article>
            :   <NotFound notFound={notFound}/>
        }
    </>)
}