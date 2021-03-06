/*
//------------------------------------------------------------------------------ 
// This code was generated by Amplication. 
// 
// Changes to this file will be lost if the code is regenerated. 
//
// There are other ways to to customize your code, see this doc to learn more
// https://docs.amplication.com/docs/how-to/custom-code
//
//------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumCustomerFreedomPay } from "./EnumCustomerFreedomPay";
import { IsEnum, IsOptional, IsInt, IsString } from "class-validator";
@InputType()
class CustomerUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumCustomerFreedomPay,
  })
  @IsEnum(EnumCustomerFreedomPay)
  @IsOptional()
  @Field(() => EnumCustomerFreedomPay, {
    nullable: true,
  })
  freedomPay?: "Yes" | "No";

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  mobile?: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  Password?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;
}
export { CustomerUpdateInput };
