// search.controller.ts

import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('/medicine')
  async searchMedicine(@Query('query') query: string): Promise<any[]> {
    return this.searchService.searchMedicine(query);
  }
}
