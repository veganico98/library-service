import { Body, Controller, Delete, Get, Inject, Param, Patch, Post } from "@nestjs/common";
import { CreateUserDto } from "src/app/dto/create-user.dto";
import { UpdateDeptoUserDto } from "src/app/dto/update-depto-user.dto";
import { UpdateRoleDto } from "src/app/dto/update-role-user.dto";
import { CreateUserUseCase } from "src/app/use-cases/create-user.use-case";
import { FindAllUserUseCase } from "src/app/use-cases/find-all-user.use-case";
import { FindByIdUserUseCase } from "src/app/use-cases/find-by-id-user.use-case";
import { RemoveUserUseCase } from "src/app/use-cases/remove-ser.use-case";
import { SetDeptoUserUseCase } from "src/app/use-cases/set-depto-user.use-case";
import { SetRoleUserCase } from "src/app/use-cases/set-role-user.use.case";

@Controller('users')
export class UserController {
    @Inject(FindAllUserUseCase)
  private readonly findAllUserUseCase: FindAllUserUseCase;

  @Inject(FindByIdUserUseCase)
  private readonly findByIdUserUseCase: FindByIdUserUseCase;

  @Inject(CreateUserUseCase)
  private readonly createUserUseCase: CreateUserUseCase;

  @Inject(SetDeptoUserUseCase)
  private readonly setDeptoUserUseCase: SetDeptoUserUseCase;

  @Inject(RemoveUserUseCase)
  private readonly removeUserUseCase: RemoveUserUseCase;

  @Inject(SetRoleUserCase)
  private readonly setRoleUserUseCase: SetRoleUserCase;

  @Get()
  findAll() {
    return this.findAllUserUseCase.execute();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findByIdUserUseCase.execute(id);
  }

  @Patch(':id/depto')
  async updateDepto(@Param('id') id: string, @Body() UpdateDeptoUserDto: UpdateDeptoUserDto) {
    return this.setDeptoUserUseCase.execute(id, UpdateDeptoUserDto);
  }

  @Patch(':id/role')
  async updateRole(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.setRoleUserUseCase.execute(id, updateRoleDto);
  }
  
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.createUserUseCase.execute(createUserDto);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.removeUserUseCase.execute(id);
  }
}