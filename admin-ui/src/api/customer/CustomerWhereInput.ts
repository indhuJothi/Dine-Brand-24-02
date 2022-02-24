import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type CustomerWhereInput = {
  freedomPay?: "Yes" | "No";
  id?: StringFilter;
  mobile?: IntFilter;
  Password?: StringFilter;
  username?: StringFilter;
};
