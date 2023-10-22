'use client'
import Image from "next/image";
import Link from "next/link";
import { ArticleCompleteType } from "@/types";
import NotFound from "@/components/NotFound/NotFound";
import { useState } from "react";
import { updateArticle } from "../service/admin.service";
import { useRouter } from "next/navigation";

interface Props {
    data: ArticleCompleteType
    seccion: string
}

export default function AdminFullArticle({data, seccion}: Props){
    const router = useRouter()
    
    const [article,setArticle] = useState({
        _id: data._id,
        title: data.title,
        content: data.content,
        img: data.img,
        summary: data.summary,
        date: data.date,
        tags: data.tags,
        section: data.section
    })
    const contentComplete = data.content

    // Primer letra en mayuscula
    seccion = seccion[0].toUpperCase() + seccion.substring(1)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setArticle({
            ...article,
            [e.target.name]: e.target.value
        })
    }

    const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const submit = await updateArticle(article)
        if(submit === 'updated'){
            router.push('/admin')
        }
    }

    return(
        <section>
            {
                data.title !== 'News not found'
                ? <>
                    <form className="py-4 flex flex-col gap-4" onSubmit={handelSubmit}>
                        {/* Titulo */}
                        {/* <h2 className="text-4xl lg:text-2xl font-bold text-center max-sm:text-2xl">{data.title}</h2> */}
                        <h4>Titulo:</h4>
                        <textarea name='title'  value={article.title} cols={30} rows={2} onChange={handleChange} className="text-4xl lg:text-2xl font-bold text-center max-sm:text-2xl border-2 border-black p-2"/>
                        {/* Bajada */}
                        {/* <p className="text-lg lg:text-sm text-center max-sm:text-sm">{data.summary}</p> */}
                        <h4>Bajada:</h4>
                        <textarea name='summary'  value={article.summary} cols={30} rows={2} onChange={handleChange} className="text-lg lg:text-sm text-center max-sm:text-sm border-2 border-black p-2"/>
                        <p className="text-[#5a5a5a] lg:text-xs max-sm:text-xs">{data.date}</p>
                        <Image src={data.img} alt="asd" width={800} height={400} className="max-sm:w-full py-2 mx-auto"/>
                        {/* { contentComplete && <p className="w-full mx-auto text-left" dangerouslySetInnerHTML={{ __html: contentComplete }}></p>} */}
                        <h4>Nota Completa:</h4>
                        <textarea name='content'  value={article.content} cols={30} rows={15} onChange={handleChange} className="border-2 border-black p-2"/>
                        <br />
                        <button className="bg-black text-white w-1/6 mx-auto py-2 rounded-lg">Modificar</button>
                    </form>
                </>
            : <NotFound notFound="No se encontro la noticia" />
            }
            {/* <Footer/> */}
        </section>)
}
