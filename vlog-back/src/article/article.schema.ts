import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type ArticleDocument = HydratedDocument<Article>

@Schema({ timestamps: true})
export class Article {
    @Prop({unique: true})
    title: string

    @Prop()
    summary: string

    @Prop()
    content:string

    @Prop()
    img: string

    @Prop()
    date:string

    @Prop()
    section: string

    @Prop()
    tags: string[]
    
    @Prop()
    publico: boolean

}

export const ArticleSchema = SchemaFactory.createForClass(Article)