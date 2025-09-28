import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PrismaService } from "src/prisma/prisma.service";
import { UserEventsController } from "./user-events.controller";
import { UsersController } from "./users.controller";
import { CreateUserUseCase } from "./use-cases/create-user.use-case";
import { UserRepository } from "src/repositories/user.repository";

@Module({
  imports: [
    // Configura o RabbitMQ como microservice para consumo
    ClientsModule.register([
      {
        name: 'USERS_SERVICE',  // nome do client (pode ser usado para enviar mensagens)
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://guest:guest@localhost:5672'],
          queue: 'users_queue',      // fila que vamos consumir
          queueOptions: { durable: true },
          prefetchCount: 10,         // quantidade máxima de mensagens pendentes
        },
      },
    ]),
  ],
  controllers: [UsersController, UserEventsController],
  providers: [
    PrismaService,
    CreateUserUseCase,
    UserRepository,
    {
      provide: 'IUserRepository',
      useExisting: UserRepository,
    },
  ],
})
export class UsersModule {}
