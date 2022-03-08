import { Kafka } from 'kafkajs';

import config from '../config/config.js';

const client = new Kafka({
  clientId: config.kafka.CLIENT_ID,
  brokers: config.kafka.BROKERS,
});
const producer = client.producer();
await producer.connect();

const kafkaService = {
  sendRecord: async (topic, data) => {
    const event = {
      timestamp: Date.now(),
      data,
    };

    const bufferData = Buffer.from(JSON.stringify(event));
    const record = {
      topic,
      messages: [{ value: bufferData }],
    };
    await producer.send(record);
  },
};

export default kafkaService;
