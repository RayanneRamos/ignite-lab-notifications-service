/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { MailService } from './mail.service';

@Injectable()
export class PostmaskMailService implements MailService {
  sendEmail(): string {
    return 'Postmark Mail!';
  }
}
