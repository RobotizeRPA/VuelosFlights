'use client'
import { ArticlesCardType } from "@/types"
import AdminCard from "./helpers/AdminCard"
import { useState,useEffect } from "react"
import { getMoreArticles } from "../Home/service/home.service"
import { useRouter } from "next/navigation"

interface Props {
    data: ArticlesCardType[]
}

export default function Admin({data}: Props){
    const router = useRouter()
    const [search, setSearch] = useState('')
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

   
    // Para agregar mas notas
    let [moreArticles, setMoreNews] = useState<ArticlesCardType[]>(data)
    const [limit,setLimit] = useState<boolean>(false)
    const [counter,setCounter] = useState<number>(2)
    
    moreArticles = moreArticles.filter(e => e.title.toLowerCase().includes(search.toLowerCase()))
    
    // Para traer mas notas 
    const getNews = async () => {
        const articlesPage: ArticlesCardType[] = await getMoreArticles(counter.toString())
        console.log(articlesPage[0])
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
            <section>
                <div className="flex justify-between items-center gap-2 w-3/4 mx-auto p-4 border-b-2 border-b-black">
                    {/* <div className="flex justify-center items-center gap-4">
                        <button onClick={() => setSection('')} className={section == '' ? 'bg-black text-white py-2 px-4 rounded-lg' : 'text-black'}>Todos</button>
                        <button onClick={() => setSection('aerolineas')} className={section == 'aerolineas' ? 'bg-black text-white py-2 px-4 rounded-lg' : 'text-black'}>Aerolineas</button>
                        <button onClick={() => setSection('aeropuertos')} className={section == 'aeropuertos' ? 'bg-black text-white py-2 px-4 rounded-lg' : 'text-black'}>Aeropuertos</button>
                        <button onClick={() => setSection('fabricantes')} className={section == 'fabricantes' ? 'bg-black text-white py-2 px-4 rounded-lg' : 'text-black'}>Fabricantes</button>
                    </div> */}
                    <h2 className="font-bold text-4xl cursor-pointer max-sm:text-4xl" onClick={() => router.push('/')}>FlightPosting</h2>
                    <div>
                        <input type="text" value={search} placeholder="Busca el titulo maricon" onChange={handleSearch} className="rounded-lg border-2 border-black px-4"/>
                    </div>
                </div>
                <div className="w-3/4 mx-auto grid grid-cols-5 gap-4 max-sm:grid-cols-1 max-sm:w-full">
                    {/* {
                        search === '' 
                        ? moreArticles.map(e => {return <AdminCard key={e._id} _id={e._id} img={e.img} section={e.section} title={e.title}/>})
                        : moreArticles.map(e => {return <AdminCard key={e._id} _id={e._id} img={e.img} section={e.section} title={e.title}/>})
                        
                    } */}
                    {
                        moreArticles.map(e => {return <AdminCard key={e._id} _id={e._id} img={e.img} section={e.section} title={e.title}/>})
                    }
                </div>
            </section>
                {
                    (!limit && moreArticles.length > 10) && <div className="my-4 w-1/6 mx-auto text-center p-2 bg-black text-white max-sm:w-2/6"><button onClick={getNews}>Mas noticias</button></div>
                }
        </>)
}
