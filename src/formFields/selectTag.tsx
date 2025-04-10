import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FC } from "react";

interface props {
  formFields: any;
  field: any;
  setFormFields: any;
}
const SelectTag: FC<props> = ({ formFields, field, setFormFields }) => {
  const handleChange = (e: any) => {
    const updatedfields = formFields.map((fieldDetails: any) =>
      fieldDetails.name === field?.name
        ? { ...fieldDetails, value: e.target.value }
        : fieldDetails
    );
    setFormFields(updatedfields);
  };
  console.log(field);
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{field?.name}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id={field?.name}
        value={field?.value}
        label={field?.name}
        size="small"
        className="w-full"
        onChange={handleChange}
      >
        {field?.menuitems?.map((menu: any) => (
          <MenuItem value={menu.value}>{menu.title}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectTag;
