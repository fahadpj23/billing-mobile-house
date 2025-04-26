import { TextField } from "@mui/material";
import { FC } from "react";

interface props {
  field: any;
  formik: any;
}

const InputTag: FC<props> = ({ field, formik }) => {
  return (
    <>
      <TextField
        id="outlined-basic"
        label={field?.label}
        variant="outlined"
        size="small"
        value={formik.values[field.name]}
        name={field?.name}
        onChange={formik.handleChange}
        className="w-full"
        error={formik.touched[field?.name] && formik.errors[field?.name]}
        helperText={formik.touched[field?.name] && formik.errors[field?.name]}
      />
    </>
  );
};
export default InputTag;
