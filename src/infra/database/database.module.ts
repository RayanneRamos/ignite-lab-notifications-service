/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { NotificationsRepository } from "@application/repositories/notification-repository";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaNotificationRepository } from "./prisma/repositories/prisma-notifications-repositories";

@Module({
  providers: [PrismaService, {
    provide: NotificationsRepository,
    useClass: PrismaNotificationRepository,
  }],
  exports: [
    NotificationsRepository,
  ],
})

export class DatabaseModule {}