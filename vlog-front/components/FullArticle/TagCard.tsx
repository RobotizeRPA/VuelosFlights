import Link from "next/link"

interface Props {
    tag: string
}

export default function TagCard({tag}: Props){
    const tagUrl = tag.replace(' ', '-')
    return(
        <Link href={`/tags/${tagUrl}`} className="border-2 border-[#441eae] p-2 cursor-pointer">
            <span>{tag}</span>
        </Link>)
}   