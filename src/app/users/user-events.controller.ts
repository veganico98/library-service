import { Controller } from '@nestjs/common';
import { EventPattern, Payload, Ctx, RmqContext } from '@nestjs/microservices';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { CreateUserDto } from './dto/CreataUserDto';

@Controller()
export class UserEventsController {
  constructor(private createUser: CreateUserUseCase) {}

@EventPattern('user.created')
async handleUserCreated(@Payload() data: CreateUserDto, @Ctx() context: RmqContext) {
  const channel = context.getChannelRef();
  const msg = context.getMessage();

  console.log('Mensagem user.created recebida:', data);

  await this.createUser.execute(data);
  channel.ack(msg);
}

  @EventPattern('user.updated')
  async handleUserUpdated(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const msg = context.getMessage();

    console.log('Mensagem user.updated recebida:', data);
    channel.ack(msg);
  }
}
