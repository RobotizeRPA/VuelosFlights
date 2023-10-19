import Image from "next/image";
import Link from "next/link";
// import RelacionCard from "./RelacionCard/RelacionCard";
// import Footer from "../Footer/Footer";
// import Robotize from '../../assets/imagenPerfil.jpg'
import NotFound from "../NotFound/NotFound";
import { ArticleCompleteType } from "@/types";
import TagCard from "./TagCard";
// import TagCard from "../NewsCard/TagCard";
// import { contentCompletee } from "./service/notaCompleta.service";

interface Props {
    data: ArticleCompleteType
    // dataSection: NewModel[]
    seccion: string
}

export default function FullArticle({data, seccion}: Props){
    // const contentComplete = contentCompletee(data.tags,data.content)
    const contentComplete = data.content

    // Primer letra en mayuscula
    seccion = seccion[0].toUpperCase() + seccion.substring(1)

    // const filterNota = dataSection?.filter(e => e.title !== data?.title)
    // Hago un slice porque a veces GPT flashea y le crea 10 tags, entonces me rompe la visual
    // Con este slice solamente agarro los primero dos que llegen en el array (por default vienen 2)
    const tags = data.tags
    return(
        <section>
            {
                data.title !== 'News not found'
                ? <>
                    <article className="py-4 flex flex-col gap-4">
                        {/* <p className="pb-6 text-lg text-left"><Link href='/'>Robotize</Link> {'>'} <Link href={`/${seccion.toLowerCase()}`}>{seccion}</Link></p> */}
                        {/* Titulo */}
                        <h2 className="text-4xl lg:text-2xl font-bold text-center max-sm:text-2xl">{data.title}</h2>
                        {/* Bajada */}
                        <p className="text-lg lg:text-sm text-center max-sm:text-sm">{data.summary}</p>
                        <p className="text-[#5a5a5a] lg:text-xs max-sm:text-xs">{data.date}</p>
                        <div className="flex gap-2 items-center">
                            {/* <Image src={Robotize} alt='Icono' width={50} height={50} className="rounded-[50%]"/> */}
                        <span>Por <strong>Robotize</strong></span>
                        </div>
                        <Image src={data.img} alt="asd" width={800} height={400} className="max-sm:w-full py-2 mx-auto"/>
                        { contentComplete && <p className="w-full mx-auto text-left" dangerouslySetInnerHTML={{ __html: contentComplete }}></p>}
                        <br /><br />
                        <div className="flex justify-start items-center gap-4">
                            {
                                tags?.map(e => {
                                    return <TagCard key={e} tag={e}/>
                                })
                            }
                        </div>
                    </article>
                        {/* <h4 className="font-semibold text-lg">Te puede interesar</h4>
                    <article className="border-t-2 grid grid-cols-5 text-center gap-6 border-b-2 border-[#441eae] py-4 max-sm:grid-cols-3">
                        {
                            filterNota.map(e => {
                                return <RelacionCard key={e._id} img={e.img} keytitle={e.keytitle} pretitle={e.pretitle} section={e.section} _id={e._id}/>
                            })
                        }
                    </article> */}
                </>
            : <NotFound notFound="No se encontro la noticia" />
            }
            {/* <Footer/> */}
        </section>)
}
