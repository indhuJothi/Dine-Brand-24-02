import { StringFilter } from "../../util/StringFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type LocationWhereInput = {
  address?: StringFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  pinCode?: StringFilter;
};
