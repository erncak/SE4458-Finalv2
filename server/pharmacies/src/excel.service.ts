import { Injectable } from '@nestjs/common';
//import * as XLSX from 'exceljs';

@Injectable()
export class ExcelService {
/*  async readExcelData(data: Buffer): Promise<any[]> {
    try {
      const workbook = new XLSX.Workbook();
      await workbook.xlsx.load(data);

      // Assuming the data is in a simple format (name in first column, price in second column)
      const sheet = workbook.getWorksheet(1); // Assuming the data is in the first sheet
      const medicines: any[] = [];

      sheet.eachRow((row, rowNumber) => {
        const name = row.getCell(1).value;
        const price = row.getCell(2).value;

        if (name && price) {
          medicines.push({ name, price });
        }
      });

      return medicines;
    } catch (error) {
      console.error('Error reading Excel data:', error);
      throw error;
    }
  }*/
}
