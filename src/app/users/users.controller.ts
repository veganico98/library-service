import { Body, Controller, Delete, Get, Inject, Param, Patch, Post } from '@nestjs/common';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { CreateUserDto } from './dto/CreataUserDto';


@Controller('users')
export class UsersController {
//   @Inject(FindAllUserUseCase)
//   private readonly findAllUserUseCase: FindAllUserUseCase;

//   @Inject(FindByIdUserUseCase)
//   private readonly findByIdUserUseCase: FindByIdUserUseCase;

  @Inject(CreateUserUseCase)
  private readonly createUserUseCase: CreateUserUseCase;

//   @Inject(SetDeptoUserUseCase)
//   private readonly setDeptoUserUseCase: SetDeptoUserUseCase;

//   @Inject(RemoveUserUseCase)
//   private readonly removeUserUseCase: RemoveUserUseCase;

//   @Inject(SetRoleUserUseCase)
//   private readonly setRoleUserUseCase: SetRoleUserUseCase;

//   @Get()
//   findAll() {
//     return this.findAllUserUseCase.execute();
//   }
  
//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.findByIdUserUseCase.execute(id);
//   }

//   @Patch(':id/depto')
//   async updateDepto(@Param('id') id: string, @Body() updateDeptoUserDto: UpdateDeptoUserDto) {
//     return this.setDeptoUserUseCase.execute(id, updateDeptoUserDto);
//   }

//   @Patch(':id/role')
//   async updateRole(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
//     return this.setRoleUserUseCase.execute(id, updateRoleDto);
//   }
  
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.createUserUseCase.execute(createUserDto);
  }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.removeUserUseCase.execute(id);
//   }
}