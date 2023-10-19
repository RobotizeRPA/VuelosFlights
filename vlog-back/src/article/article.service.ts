import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNew, ArticleSectionModel } from 'src/types';
import { Article } from './article.schema';

@Injectable()
export class ArticleService {
    constructor(@InjectModel(Article.name) private articleModel: Model<Article>){}

    async createArticle(data: CreateNew){
        const article = await new this.articleModel({
            title: data.title,
            summary: data.summary,
            content: data.content,
            img: data.img,
            date: data.date,
            section: data.section,
            tags: data.tags
        })

        return article.save()
    }

    async findArticle(page: string){
        const limit = 27
        const skip = (parseInt(page) - 1) * limit

        const allArticle = await this.articleModel.find().sort({createdAt: -1}).skip(skip).limit(limit).exec()

        return allArticle
    }

    async findArticleTitle(title:string){
        const article = await this.articleModel.findOne({
            _id: title
        })

        if(article){
            return article
        }
        return {title:'article not found'}
    }

    async findArticleBySeccion(data: ArticleSectionModel) {
        const limit = 10
        const skip = (parseInt(data.page) - 1) * limit

        const allArticle = await this.articleModel.find({section:data.section}).sort({createdAt: -1}).skip(skip).limit(limit).exec()
        if(allArticle.length === 0){
            return [{title: 'No hay mas data'}]
        }
        return allArticle

    }

    async findArticleBySeccionHome(data: ArticleSectionModel) {
        const limit = 14
        const skip = (parseInt(data.section) - 1) * limit

        const allArticle = await this.articleModel.find({section:data.section}).sort({createdAt: -1}).skip(skip).limit(limit).exec()

        return allArticle

    } 

    async findByKeyWork(keyword: string){
        const regex = new RegExp(keyword, 'i')
        const article = await this.articleModel.find({title: regex}).sort({createdAt: -1}).exec()
        if(article.length !== 0){
            return Article
        }
        return [{title: 'No hay data'}]
    }
}