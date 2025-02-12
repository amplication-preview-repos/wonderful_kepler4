import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const HfhfhgghEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="fhryry" source="fhryry" />
      </SimpleForm>
    </Edit>
  );
};
