import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type LocationUpdateInput = {
  address?: string;
  customer?: CustomerWhereUniqueInput | null;
  pinCode?: string;
};
