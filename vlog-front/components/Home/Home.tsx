'use client'
import { ArticlesCardType, MainArticleType } from "@/types"
import ArticleCard from "../ArticleCard/ArticleCard"
import ArticleMain from "../ArticleCard/ArticleMain"
import {useState} from 'react'
import { getMoreArticles } from "./service/home.service"
import Footer from "../Footer/Footer"
import ArticleMainDos from "../ArticleCard/ArticleMainDos"
import VerTodo from "./SectionCard"
import Link from "next/link"
import SectionCardHome from "./SectionCard"
interface Props{
    mainArticle: MainArticleType[]
    dataAerolineas: ArticlesCardType[]
    dataAeropuertos: ArticlesCardType[]
    dataFabricantes: ArticlesCardType[]
}


export default function Home({mainArticle, dataAerolineas,dataAeropuertos,dataFabricantes}: Props){

    return(
            <>
                <ArticleMainDos mainArticles={mainArticle}/>

                {/* SECTION PARA AEROPUERTOS */}
                <SectionCardHome section='aeropuertos' data={dataAeropuertos}/>

                {/* SECTION PARA AEROLINEAS */}
                <SectionCardHome section='aerolineas' data={dataAerolineas}/>
                
                {/* SECTION PARA FABRICANTES */}
                <SectionCardHome section='industria' data={dataFabricantes}/>
                <div className="border-t-2 border-t-primaryColor w-full mt-10 bg-primaryColor text-white">
                    <Footer/>    
                </div>
            </>
        )
}