import Link from "next/link";
import ArticleCard from "../ArticleCard/ArticleCard";
import { ArticlesCardType } from "@/types";

interface Props {
    section: string
    data: ArticlesCardType[]
}

export default function SectionCardHome({section, data}: Props){
    const sectioon = section.charAt(0).toUpperCase() + section.slice(1)

    return(
        <section className="w-3/4 mx-auto grid grid-cols-3 gap-4 max-sm:grid-cols-2 max-sm:w-full max-sm:gap-2 max-sm:px-2 mt-10">
        <h4 className="grid col-span-3 font-bold text-2xl border-b-2 border-b-black max-sm:col-span-2">{sectioon}</h4>
        {
            data.map(e => {
                return <ArticleCard key={e._id} title={e.title} section={e.section} img={e.img} _id={e._id}/>
            })
        }
        <div className="flex justify-center items-center h-[210px]"><Link href={`/${section}`} className="w-3/6 mx-auto text-center p-4 bg-black text-white max-sm:w-2/6">Ver todos</Link></div>
    </section>
    )
}