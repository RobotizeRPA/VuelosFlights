
import Image from "next/image"
import Link from "next/link"
import { CardTitle } from "../PersonalComponent/titlte"

interface Props {
    _id: string
    img: string
    title: string
    section: string
}

export default function SearchCard({_id,img,title, section}: Props){
    return(
        <Link href={`/${section}/${_id}`} className="border-2 rounded-lg flex justify-left items-center">
            <Image src={img} alt={title} width={150} height={150} className="mr-4"/>
            <CardTitle title={title} />
            {/* <span>{section.toLocaleUpperCase()}</span> */}
        </Link>)
}