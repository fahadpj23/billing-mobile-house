import { attributeFormField } from "constants/attributePage/form/formFields";
import { attributeInitialValue } from "constants/attributePage/form/initialValue";
import { attributeValidationSchema } from "constants/attributePage/form/ValidationSchema";

export const getFormDetails = (page: string) => {
  switch (page) {
    case "attribute":
      return {
        formField: attributeFormField,
        initialValue: attributeInitialValue,
        validationSchema: attributeValidationSchema,
      };
  }
};
