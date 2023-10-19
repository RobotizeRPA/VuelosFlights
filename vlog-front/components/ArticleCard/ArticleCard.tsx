import Image from "next/image"
import { CardTitle } from "../PersonalComponent/titlte"
import Link from "next/link"

interface Props {
    title: string
    img: string
    section: string
    _id: string
}

export default function ArticleCard({title,img,section, _id}: Props){
    const sectioon = section.toLowerCase()
    return(
        <Link href={`/${sectioon}/${_id}`} className="text-center">
           <Image src={img} alt={title} width={200} height={200} className="w-full p-2 min-h-[150px] lg:min-h-[150px]"/>
           <CardTitle title={title} />
           <p className="text-left p-2">{section}</p> 
        </Link>)
}