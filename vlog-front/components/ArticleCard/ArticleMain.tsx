import Image from "next/image"
import { CardTitle } from "../PersonalComponent/titlte"
import Link from "next/link"

interface Props {
    title: string
    section: string
    _id: string
    summary: string
    date: string
}

export default function ArticleMain({title,section, _id, summary, date}: Props){
    const sectioon = section.toLowerCase()
    return(
        <Link href={`/${sectioon}/${_id}`} className="text-left text-white w-3/4 mx-auto flex flex-col justify-center items-center h-full gap-4">
           {/* <Image src={img} alt={title} width={200} height={200} className="w-full p-2 min-h-[150px] lg:min-h-[150px]"/> */}
           {/* <CardTitle title={title} /> */}
           <h4 className="text-4xl font-bold w-full hover:text-title max-sm:text-2xl">{title}</h4>
           <p className="text-xl max-sm:text-sm">{summary}</p>
           <div className="text-left text-sm w-full max-sm:text-xs">
            <span>por Vuelos Gatulin - </span>
            <span>{date}</span>
           </div>
           {/* <p className="text-left p-2">{section}</p>  */}
        </Link>)
}