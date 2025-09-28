import { IsEmail, IsEnum, IsOptional, IsString, MinLength } from "class-validator";
import { UserRole } from "@prisma/client";

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsEnum(UserRole)
  @IsOptional()
  role?: UserRole;
}
