
import * as amqp from 'amqplib';

async function consumeReady() {
  const connection = await amqp.connect('amqp://guest:guest@localhost:5672');
  const channel = await connection.createChannel();

  const queue = 'users_queue';
  await channel.assertQueue(queue, { durable: true });
  await channel.prefetch(10);

  console.log('Consumidor temporário conectado à fila users_queue...');

  channel.consume(queue, (msg) => {
    if (!msg) return;

    const content = msg.content.toString();
    console.log('Mensagem consumida:', content);

    // Ack para remover da fila
    channel.ack(msg);
  });
}

consumeReady();
