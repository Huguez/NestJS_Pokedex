import { IsNumber, IsOptional, IsPositive, Min } from "class-validator";

export class QueriesParametersDto {

   @IsOptional()
   @IsPositive()
   @IsNumber()
   @Min( 1 )
   size?: number;

   @IsOptional()
   @IsPositive()
   @IsNumber()
   page?: number;
}