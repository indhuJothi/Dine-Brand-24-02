import { Customer } from "../customer/Customer";

export type Location = {
  address: string;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  pinCode: string;
  updatedAt: Date;
};
