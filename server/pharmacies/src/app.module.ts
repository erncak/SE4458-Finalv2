import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadController } from './upload.controller';
import { ExcelService } from './excel.service';
import { DatabaseService } from './database.service';
import { SearchModule } from './search/search.module';

@Module({
  imports: [SearchModule],
  controllers: [AppController, UploadController],
  providers: [AppService, ExcelService, DatabaseService],
})
export class AppModule {}
