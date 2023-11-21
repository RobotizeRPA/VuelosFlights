import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNew, ArticleSectionModel, ArticleUpdateModel } from 'src/types';
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
            tags: data.tags,
            publico: data.publico
        })

        return article.save()
    }

    async findArticle(page: string){
        const limit = 5
        const skip = (parseInt(page) - 1) * limit

        const allArticle = await this.articleModel.find().sort({createdAt: -1}).skip(skip).limit(limit).exec()

        return allArticle
    }

    async findArticleTitle(titlee:string){
        titlee = titlee.replace(/-/g, ' ')
        titlee = titlee.replace('.html', '')

        const article = await this.articleModel.findOne({
            title: { $regex: `^${titlee}`, $options: 'i' }
        })

        if(article){
            return article
        }
        return {title:'article not found'}
    }

    async findAll(){
        return this.articleModel.find()
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

    async updateArticle(data: ArticleUpdateModel){
        const article = await this.articleModel.updateOne({
            _id: data._id
        }, {
            $set: {
                title: data.title,
                summary: data.summary,
                content: data.content,
                img: data.img,
                date: data.date,
                section: data.section,
                tags: data.tags,
                publico: data.publico
            }
        })

        return 'updated'

    }

    async deleteNews(id: string) {
        try{
            console.log(id)
            const article = await this.articleModel.deleteOne({
                _id: id
            })
            console.log(article)
            return 'Deleted'
            
        }
        catch(e){
            return 'Error on Delete'
        }    
    }

    // async updateNewParameterInArticles(publico: boolean): Promise<void> {
    //     await this.articleModel.updateMany({}, { $set: { publico } }).exec();
    // }
}