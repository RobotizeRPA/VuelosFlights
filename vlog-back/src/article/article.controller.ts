import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateNew } from 'src/types';

@Controller('article')
export class ArticleController {
    constructor(private articleService: ArticleService){}

    @Post()
    createArticle(@Body() createNew: CreateNew){
        return this.articleService.createArticle(createNew)
    }

    @Get(':page')
    getArticle(@Param('page') page:string){
        return this.articleService.findArticle(page)
    }

    @Get()
    getAll(){
        return this.articleService.findAll()
    }

    @Get('/article/:title')
    getArticleTitle(@Param('title') title: string){
        return this.articleService.findArticleTitle(title)
    }

    @Get('/:section/:page')
    getArticleBySection(@Param('section') section: string, @Param('page') page: string){
        return this.articleService.findArticleBySeccion({section,page})
    }

    @Get('/section/:section/:page')
    getArticleBySectionHome(@Param('section') section: string, @Param('page') page: string){
        return this.articleService.findArticleBySeccionHome({section,page})
    }

    @Get('/search')
    getSearchArticle(@Query('keyword') keyword: string){
        return this.articleService.findByKeyWork(keyword)
    }

    @Patch('/:id')
    updateArticle(@Param('id') id: number, @Body() body){
        return this.articleService.updateArticle(body)
    }

}
