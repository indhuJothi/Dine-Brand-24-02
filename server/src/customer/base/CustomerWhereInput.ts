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
import { IsEnum, IsOptional } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IntFilter } from "../../util/IntFilter";
@InputType()
class CustomerWhereInput {
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
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  mobile?: IntFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  Password?: StringFilter;
}
export { CustomerWhereInput };
