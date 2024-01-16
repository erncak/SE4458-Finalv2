import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('prescription')
  async createPrescription(@Body() prescriptionData: any): Promise<void> {

    return this.appService.getDataFromClient(prescriptionData);
  }
}
