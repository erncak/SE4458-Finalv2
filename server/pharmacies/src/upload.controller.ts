import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ExcelService } from './excel.service';
import { DatabaseService } from './database.service';

@Controller('upload')
export class UploadController {
  constructor(
    private readonly excelService: ExcelService,
    private readonly databaseService: DatabaseService,
  ) {}
/*
  @Post('excel')
  @UseInterceptors(FileInterceptor('file'))
  async uploadExcelFile(@UploadedFile() file: any) {
    try {
      // Use file.buffer directly
      const data = file.buffer;

      // Process the file data
      const medicines = await this.excelService.readExcelData(data);
      await this.databaseService.saveMedicinesToDatabase(medicines);

      // Handle response as needed
      return {
        message:
          'File data processed, medicines extracted, and saved to the database',
      };
    } catch (error) {
      console.error('Error processing file:', error);
      return {
        message: 'Error processing file',
      };
    }
  }*/
}
