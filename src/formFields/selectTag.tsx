import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FC } from "react";

interface props {
  formik: any;
  field: any;
}
const SelectTag: FC<props> = ({ formik, field }) => {
  // const handleChange = (e: any) => {
  //   const updatedfields = formFields.map((fieldDetails: any) =>
  //     fieldDetails.name === field?.name
  //       ? { ...fieldDetails, value: e.target.value }
  //       : fieldDetails
  //   );
  //   setFormFields(updatedfields);
  // };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{field?.name}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id={formik.values[field.name]}
        value={formik.values[field.name]}
        label={field?.name}
        name={field?.name}
        size="small"
        className="w-full"
        onChange={formik.handleChange}
      >
        {field?.menuitems?.map((menu: any) => (
          <MenuItem value={menu.value}>{menu.title}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectTag;
