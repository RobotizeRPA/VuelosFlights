import { CardTitle } from "@/components/PersonalComponent/titlte"
import Image from "next/image"
import Link from "next/link"

interface Props {
    title: string
    img: string
    section: string
    _id: string
}

export default function AdminCard({title,img,section, _id}: Props){
    // const sectioon = section.toLowerCase()
    return(
        <Link href={`/admin/${_id}`} className="text-center">
           <Image src={img} alt={title} width={100} height={100} className="w-full p-2 min-h-[150px] lg:min-h-[150px]"/>
           <CardTitle title={title} />
           <p className="text-left p-2">{section}</p> 
        </Link>)
}