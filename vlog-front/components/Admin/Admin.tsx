'use client'
import { ArticlesCardType } from "@/types"
import AdminCard from "./helpers/AdminCard"
import { useState } from "react"

interface Props {
    data: ArticlesCardType[]
}

export default function Admin({data}: Props){
    const [search, setSearch] = useState('')
    const [section, setSection] = useState('aerolineas')

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    data = data.filter(e => e.section === section)

    const dataFilter = data.filter(e => e.title.toLowerCase().includes(search.toLowerCase()))

    return(
        <>
            <section>
                <div className="flex justify-between items-center gap-2 w-3/4 mx-auto p-4 border-b-2 border-b-black">
                    <div className="flex justify-center items-center gap-4">
                        <button onClick={() => setSection('aerolineas')} className={section == 'Aerolineas' ? 'bg-black text-white py-2 px-4 rounded-lg' : 'text-black'}>Aerolineas</button>
                        <button onClick={() => setSection('internacional')} className={section == 'internacional' ? 'bg-black text-white py-2 px-4 rounded-lg' : 'text-black'}>Internacional</button>
                    </div>
                    <div>
                        <input type="text" value={search} placeholder="Busca el titulo maricon" onChange={handleSearch} className="rounded-lg border-2 border-black px-4"/>
                    </div>
                </div>
                <div className="w-3/4 mx-auto grid grid-cols-5 gap-4 max-sm:grid-cols-1 max-sm:w-full">
                    {
                        search === '' ? data.map(e => {return <AdminCard key={e._id} _id={e._id} img={e.img} section={e.section} title={e.title}/>})
                        : dataFilter.map(e => {return <AdminCard key={e._id} _id={e._id} img={e.img} section={e.section} title={e.title}/>})
                    }
                </div>
            </section>
        </>)
}