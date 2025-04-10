import { TextField } from "@mui/material";
import { FC } from "react";

interface props {
  field: any;
  formFields: any;
  setFormFields: any;
}

const InputTag: FC<props> = ({ field, formFields, setFormFields }) => {
  const handleChange = (e: any) => {
    const updatedfields = formFields.map((fieldDetails: any) =>
      fieldDetails.name === field?.name
        ? { ...fieldDetails, value: e.target.value }
        : fieldDetails
    );
    setFormFields(updatedfields);
  };

  return (
    <TextField
      id="outlined-basic"
      label={field?.label}
      variant="outlined"
      size="small"
      value={field.value}
      name={field?.name}
      onChange={handleChange}
      className="w-full"
    />
  );
};
export default InputTag;
