/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { MailService } from "./mail.service";

@Injectable()
export class SMTMailService implements MailService {
  sendEmail(): string {
    return 'SMTP Mail!';
  }
}