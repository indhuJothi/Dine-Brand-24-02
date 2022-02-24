import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type LocationCreateInput = {
  address: string;
  customer?: CustomerWhereUniqueInput | null;
  pinCode: string;
};
