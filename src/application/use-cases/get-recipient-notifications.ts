/* eslint-disable prettier/prettier */
import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '../repositories/notification-repository';

interface GetRecipientNotificationRequest {
  recipientId: string;
}

interface GetRecipientNotificationResponse {
  notifications: Notification[];
}
export class GetRecipientNotification {
  constructor(private notificationRepository: NotificationsRepository) {}
  
  async execute(
    request: GetRecipientNotificationRequest,
  ): Promise<GetRecipientNotificationResponse> {
    const { recipientId } = request;

    const notifications = await this.notificationRepository.findManyByRecipientId(recipientId)

    return {
      notifications,
    }
  }
}
