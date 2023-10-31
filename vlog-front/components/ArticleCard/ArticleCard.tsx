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
    const sectioon = section.charAt(0).toUpperCase() + section.slice(1)

    return(
        <Link href={`/${section}/${_id}`} className="text-center">
            <div className="relative group hover:bg-gray-500">
                <Image src={img} alt={title} width={200} height={200} className="w-full min-h-150 lg:min-h-150 hover:z-0"/>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-sm:hidden">
                    <button className="w-full h-full text-white hover:bg-more">
                    Ver más
                    </button>
                </div>
            </div>
           <CardTitle title={title} />
           <p className="text-left text-xs p-2">- {sectioon}</p> 
        </Link>)
}