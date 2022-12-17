/* eslint-disable prettier/prettier */
import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['useful-parrot-11520-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'dXNlZnVsLXBhcnJvdC0xMTUyMCRCg4suxcjTuY8nlkgNu78co5T-g1bmiLCtC58',
          password: 'lT4ofly1rpKKTYfAFq7EZx_MJIwbljCIZDCX5Q4CRMVLMBCqB2nNNubG7vN6u2Ya7yY1HQ==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
