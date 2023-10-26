import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleModule } from './article/article.module';
import { SearchModule } from './search/search.module';


@Module({
  imports: [MongooseModule.forRootAsync({
    useFactory: () => ({
      // uri: process.env.MONGODB
      uri: 'mongodb+srv://rparobotize:uyVHJGIAMoypNagN@vlogflighst.xflctxh.mongodb.net/'
    })
  }),ArticleModule, SearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


