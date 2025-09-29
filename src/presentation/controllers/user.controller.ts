import { Body, Controller, Delete, Get, Inject, Param, Patch, Post } from "@nestjs/common";
import { CreateUserDto } from "src/app/dto/user/create-user.dto";
import { UpdateDeptoUserDto } from "src/app/dto/user/update-depto-user.dto";
import { UpdateUserDto } from "src/app/dto/user/update-user.dto";
import { CreateUserUseCase } from "src/app/use-cases/user/create-user.use-case";
import { FindAllUserUseCase } from "src/app/use-cases/user/find-all-user.use-case";
import { FindByIdUserUseCase } from "src/app/use-cases/user/find-by-id-user.use-case";
import { RemoveUserUseCase } from "src/app/use-cases/user/remove-ser.use-case";
import { SetDeptoUserUseCase } from "src/app/use-cases/user/set-depto-user.use-case";
import { UpdateUserUseCase } from "src/app/use-cases/user/update-user.use-case";


@Controller('users')
export class UserController {
  @Inject(FindAllUserUseCase)
  private readonly findAllUserUseCase: FindAllUserUseCase;

  @Inject(FindByIdUserUseCase)
  private readonly findByIdUserUseCase: FindByIdUserUseCase;

  @Inject(CreateUserUseCase)
  private readonly createUserUseCase: CreateUserUseCase;

  @Inject(UpdateUserUseCase)
  private readonly updateUserUseCase: UpdateUserUseCase;

  @Inject(SetDeptoUserUseCase)
  private readonly setDeptoUserUseCase: SetDeptoUserUseCase;

  @Inject(RemoveUserUseCase)
  private readonly removeUserUseCase: RemoveUserUseCase;

  @Get()
  findAll() {
    return this.findAllUserUseCase.execute();
  }
  
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.findByIdUserUseCase.execute(id);
  }

  @Patch(':id/depto')
  async updateDepto(@Param('id') id: number, @Body() UpdateDeptoUserDto: UpdateDeptoUserDto) {
    return this.setDeptoUserUseCase.execute(id, UpdateDeptoUserDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return this.updateUserUseCase.execute(id, updateUserDto);
  }
  
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.createUserUseCase.execute(createUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.removeUserUseCase.execute(id);
  }
}