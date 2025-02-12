import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const HfhfhgghCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="fhryry" source="fhryry" />
      </SimpleForm>
    </Create>
  );
};
