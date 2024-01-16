import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import * as sql from 'mssql';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  onModuleDestroy() {
    throw new Error('Method not implemented.');
  }
  public pool: sql.ConnectionPool;

 

  /*async saveMedicinesToDatabase(medicines: any[][]): Promise<void> {
    try {
      if (!this.pool) {
        console.error('Database connection pool is not initialized.');
        return;
      }

      const transaction = this.pool.transaction();
      await transaction.begin();

      // Loop through medicines and insert into the database
      for (let i = 2; i < medicines.length; i++) {
        const name = medicines[i]['name'];
        const price = Math.random() * (100 - 1) + 1; // Generate random price between 1 and 100
        //console.log("Vedat: ", medicines)
        //console.log("Vedat: ", name, " - ", price)
        await transaction
          .request()
          .input('param1', sql.NVarChar, name)
          .input('param2', sql.Float, price)
          .query('INSERT INTO Medicines (Name, Price) VALUES (@param1, @param2)');
      }
        //console.log("Vedat: ", transaction)
      await transaction.commit();
    } catch (error) {
      console.error('Error saving medicines to the database:', error);
    }
  }*/
  async onModuleInit() {
    // Initialize the connection pool when the module is initialized

    const config = {
      user: 'erincak',
      password: 'Gofret15',
      server: 'midterm.database.windows.net',
      database: 'Midterm',
      port: 1433,
      options: {
        encrypt: true,
        trustServerCertificate: false,
      },
    };
    this.pool = await new sql.ConnectionPool(config).connect();
    //this.pool = await new ConnectionPool(config).connect();
  }
}
