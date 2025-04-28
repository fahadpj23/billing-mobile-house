import * as Yup from "yup";

export const attributeValidationSchema = Yup.object({
  attributeName: Yup.string().required("attribute name is required"),
});
