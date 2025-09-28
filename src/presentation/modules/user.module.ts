import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/domain/entities/user.entity";
import { UserController } from "../controllers/user.controller";
import { UserService } from "src/domain/services/user.service";
import { CreateUserUseCase } from "src/app/use-cases/create-user.use-case";
import { FindAllUserUseCase } from "src/app/use-cases/find-all-user.use-case";
import { FindByIdUserUseCase } from "src/app/use-cases/find-by-id-user.use-case";
import { RemoveUserUseCase } from "src/app/use-cases/remove-ser.use-case";
import { SetDeptoUserUseCase } from "src/app/use-cases/set-depto-user.use-case";
import { SetRoleUserCase } from "src/app/use-cases/set-role-user.use.case";
import { UserTypeOrmRepository } from "src/repositories/user.repository";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [
        UserService,
        CreateUserUseCase,
        FindAllUserUseCase,
        FindByIdUserUseCase,
        RemoveUserUseCase,
        SetDeptoUserUseCase,
        SetRoleUserCase,
        UserTypeOrmRepository,
        {
            provide: "IUserRepository",
            useExisting: UserTypeOrmRepository,
        },
    ],
})
export class UserModule {}