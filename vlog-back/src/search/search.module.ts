import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, ArticleSchema } from 'src/article/article.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Article.name, schema: ArticleSchema}])],
  providers: [SearchService],
  controllers: [SearchController]
})
export class SearchModule {}
