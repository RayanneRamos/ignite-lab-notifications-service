/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common/decorators';
import { NotificationsRepository } from '../repositories/notification-repository';

interface CountRecipientNotificationRequest {
  recipientId: string;
}

interface CountRecipientNotificationResponse {
  count:  number;
}

@Injectable()
export class CountRecipientNotification {
  constructor(private notificationRepository: NotificationsRepository) {}
  
  async execute(
    request: CountRecipientNotificationRequest,
  ): Promise<CountRecipientNotificationResponse> {
    const { recipientId } = request;

    const count = await this.notificationRepository.countManyByRecipientId(recipientId)

    return {
      count,
    }
  }
}
