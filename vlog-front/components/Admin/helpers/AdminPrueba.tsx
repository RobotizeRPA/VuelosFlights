'use client'
import Image from "next/image"
import Gatulin from '../../../assets/gatulin.jpeg'
import Link from "next/link"
import { convertDate, getSections } from "../service/time.helper"
import { useState } from "react"
import { deleteArticle, updateArticle } from "../service/admin.service"
import { useRouter } from "next/navigation"
import { CardAdminCMSTitle } from "@/components/PersonalComponent/titlte"

interface Props {
    title: string
    section: string
    _id: string
    date: string
    publico: boolean
}

export default function AdminCMS({title,section, _id, date, publico}: Props){
  let titleURL = title.toLowerCase().replaceAll(' ', '-')
  titleURL = titleURL + '.html'
  const newDate = convertDate(date)  
  const [changeTitle,setChangeTitle] = useState(false)
  const [article,setArticle] = useState({
    _id: _id,
    title: title,
  })
  const router = useRouter()
  const [checked, setChecked] = useState(false)

  const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setArticle({
        ...article,
        [e.target.name]: e.target.value
    })
}

  const sections = getSections(section)

  // Para cambiar el titulo desde la primera visualizacion
  const handelSubmit = async (e: any) => {
    e.preventDefault()
    const submit = await updateArticle(article)
    if(submit === 'updated'){
        router.refresh()
        setChangeTitle(false)
    }
  }

  const getChecked = (e: any) => {
    setChecked(e.target.checked)
  }

  const deleteNote = async () => {
    await deleteArticle(_id)
    router.refresh()
    setChecked(false)
  }

  return(
        <div className="w-full grid grid-cols-5 text-center gap-4 border-b-2 py-4 relative">
          <div className="flex gap-2 items-center text-left">
                <input type="checkbox" id="scales" name="scales" className="w-[25px]" checked={checked} onChange={getChecked}/>
                <Image src={Gatulin} alt='Icono' width={50} height={50} className="rounded-lg"/>
                <div className="text-xs">
                <span><strong>Gatulin</strong></span>
                <p>{newDate}</p>
                </div>
          </div>
          <div className="gap-2 text-xs text-white">
            {
              publico ? <span className="bg-green-800 px-2 rounded-lg">Publicada</span>
              : <span className="bg-black px-2 rounded-lg">En redaccion</span>
            }
          </div>
          {
            changeTitle 
            ? <div>
              <textarea name='title' cols={30} rows={2} value={article.title} placeholder={title} className="font-semibold text-black" onChange={handleChange}/>
              <div className="flex justify-center gap-2">
                <button className="px-4 bg-black rounded-lg text-white" onClick={handelSubmit}>Modificar</button>
                <button className="px-4 bg-red-400 rounded-lg" onClick={() => setChangeTitle(false)}>Cancelar</button>
              </div>
            </div>
            : <div onClick={() => setChangeTitle(true)}><CardAdminCMSTitle title={title}/></div>
          }              
          <div>
            <select name="" id="">
              <option value={section}>{section}</option>
              {
                sections.map(e => {
                  return <option key={e} value={e}>{e}</option>
                })
              }
            </select>
          </div>
          <div>
            <Link href={`/admin/${titleURL}`} className="border-b-black border-b-2 w-1/3 text-center">Ver nota</Link>
          </div>
          {
            checked && <p className="bg-red-600 text-white text-sm rounded-lg cursor-pointer px-2 absolute right-2 top-[20px]" onClick={deleteNote}>Borrar</p>
          }
        </div>)
}