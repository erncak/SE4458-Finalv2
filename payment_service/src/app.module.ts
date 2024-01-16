import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModuleModule } from './mailer-module/mailer-module.module';

@Module({
  imports: [MailerModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
