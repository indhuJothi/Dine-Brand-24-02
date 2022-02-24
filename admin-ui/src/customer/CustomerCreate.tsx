import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="freedomPay"
          label="Freedom Pay"
          choices={[
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="Mobile" source="mobile" />
        <TextInput label="Password" source="Password" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
