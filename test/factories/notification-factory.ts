/* eslint-disable prettier/prettier */
import { Content } from "@application/entities/content";
import { Notification, NotificationProps } from "@application/entities/notification";

type Ovveride = Partial<NotificationProps>

export function makeNotification(ovveride: Ovveride = {}) {
  return new Notification({
    category: 'social',            
    content: new Content('Nova solicitação de amizade!'),
    recipientId: 'recipient-1',
    ...ovveride,
  })
}