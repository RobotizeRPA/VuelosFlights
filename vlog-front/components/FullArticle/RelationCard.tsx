
import Image from "next/image";
import Link from "next/link";
import { CardTitle } from "../PersonalComponent/titlte";

interface Props {
    img: string
    section: string
    _id: string
    title: string
}

export default function RelationCard({img, section,_id, title}: Props){
    return(
        <Link href={`/${section}/${_id}`}>
            <Image src={img} alt={title} width={100} height={100} className="w-full py-2"/>
            <CardTitle title={title}/>
        </Link>)
}