import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from 'src/article/article.schema';

@Injectable()
export class SearchService {
    constructor(@InjectModel(Article.name) private newsModel: Model<Article>){}


    async findByKeyWork(keyword: string){
        console.log(keyword, 'keyword')
        const regex = new RegExp(keyword, 'i')
        const news = await this.newsModel.find({title: regex}).sort({createdAt: -1}).exec()
        if(news.length !== 0){
            return news
        }
        return [{title: 'No hay data'}]
    }
}
