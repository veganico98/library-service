import { PartialType } from "@nestjs/mapped-types";
import { CreateLoanDto } from "./create-loan.dto";

export class updateLoanDto extends PartialType(CreateLoanDto){}