import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";


@Module({
  imports: [],
  controllers: [UserEventsController],
  providers: [
    PrismaService,
    CreateUserUseCase,
    UserPrismaRepository,
    {
      provide: 'IUserRepository',
      useExisting: UserPrismaRepository,
    },
  ],
})
export class UsersModule {}