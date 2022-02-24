import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
      </SimpleForm>
    </Edit>
  );
};
