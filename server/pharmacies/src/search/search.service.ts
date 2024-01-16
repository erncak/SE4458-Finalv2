// search.service.ts

import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database.service';
import * as sql from 'mssql';

@Injectable()
export class SearchService {
  constructor(private readonly databaseService: DatabaseService) {}

  async searchMedicine(query: string): Promise<any[]> {
    try {
      if (!this.databaseService.pool) {
        console.error('Database connection pool is not initialized.');
        return [];
      }

      const result = await this.databaseService.pool
        .request()
        .input('param1', sql.NVarChar, `%${query}%`) // Assuming you want to search for partial matches
        .query('SELECT * FROM Medicines WHERE Name LIKE @param1');

      return result.recordset;
    } catch (error) {
      console.error('Error searching medicines in the database:', error);
      return [];
    }
  }
}
