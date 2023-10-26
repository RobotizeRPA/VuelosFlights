import Navbar from "@/components/Navbar/Navbar";
import Section from "@/components/Section/Section";
import { getArticleBySection } from "./service/section.service";


export default async function SecctionApp({params}: any){
    const section = params.seccion
    const data = await getArticleBySection(section)

    return(
        <>
            <Navbar/>
            <Section section={section} data={data}/>
        </>)
}