import { Customer as TCustomer } from "../api/customer/Customer";

export const CUSTOMER_TITLE_FIELD = "Password";

export const CustomerTitle = (record: TCustomer): string => {
  return record.Password || record.id;
};
