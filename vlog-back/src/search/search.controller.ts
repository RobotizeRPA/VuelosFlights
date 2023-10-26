import { Controller, Get, Param } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
    constructor(private searchService: SearchService){}

    @Get('/:keyword')
    getSearchNews(@Param('keyword') keyword: string){
        return this.searchService.findByKeyWork(keyword)
    }
}
