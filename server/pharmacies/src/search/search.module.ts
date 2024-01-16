// search.module.ts

import { Module } from '@nestjs/common';
import { DatabaseService } from '../database.service';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';

@Module({
  controllers: [SearchController],
  providers: [DatabaseService, SearchService],
  exports: [SearchService],
})
export class SearchModule {}
