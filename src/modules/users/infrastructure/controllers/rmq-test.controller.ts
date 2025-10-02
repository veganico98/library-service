import { Controller, Get } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Inject } from "@nestjs/common";

@Controller("rmq-test")
export class RmqTestController {
  constructor(
    @Inject("MAIL_SERVICE")
    private readonly mailClient: ClientProxy,
  ) {}

  @Get("send")
  async sendTestMessage() {
    console.log("📤 Enviando mensagem de teste para RabbitMQ...");
    this.mailClient.emit("user.created", {
      name: "Test User",
      email: "test@example.com",
    });
    return { message: "Evento user.created enviado" };
  }
}
