import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MailService } from './mail/mail.service';
import { SMTMailService } from './mail/smtp-mail.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: MailService,
      useClass: SMTMailService,
    },
  ],
})
export class AppModule {}
