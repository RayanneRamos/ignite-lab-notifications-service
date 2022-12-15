/* eslint-disable prettier/prettier */
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { Notification } from '@application/entities/notification';
import { Content } from '@application/entities/content';
import { CountRecipientNotification } from './count-recipient-notifications';

describe('Count recipients notification', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotification(notificationsRepository);

    await notificationsRepository.create(
      new Notification({
        category: 'social',            
        content: new Content('Nova solicitação de amizade!'),
        recipientId: 'recipient-1',
      })
    );

    await notificationsRepository.create(
      new Notification({
        category: 'social',            
        content: new Content('Nova solicitação de amizade!'),
        recipientId: 'recipient-1',
      })
    );

    await notificationsRepository.create(
      new Notification({
        category: 'social',            
        content: new Content('Nova solicitação de amizade!'),
        recipientId: 'recipient-2',
      })
    );

    const { count } = await countRecipientNotification.execute({
      recipientId: 'recipient-1'
    });

    expect(count).toEqual(2);
  });
});
