import { Location } from "../location/Location";

export type Customer = {
  addresses?: Array<Location>;
  createdAt: Date;
  freedomPay?: "Yes" | "No";
  id: string;
  mobile: number;
  Password: string;
  updatedAt: Date;
};
