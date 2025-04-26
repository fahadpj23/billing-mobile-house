import { Chip, TextField } from "@mui/material";
import { FC, useState } from "react";

interface props {
  field: any;
  formik: any;
}
const MultipleInputItems: FC<props> = ({ field, formik }) => {
  const [inputValue, setInputValue] = useState<string>();
  const [isDeleted, setIsDeleted] = useState<boolean>(false);

  const addValues = () => {
    if (inputValue) {
      if (
        Array.isArray(formik.values[field.name]) &&
        formik.values[field.name].includes(inputValue)
      ) {
        alert("already added");
      } else {
        formik.values[field.name] = [...formik.values[field.name], inputValue];
        setInputValue("");
      }
    }
  };
  const handleDelete = (deleteValue: string) => {
    const updatedValue =
      Array.isArray(formik.values[field.name]) &&
      formik.values[field.name]?.filter(
        (value: String) => value !== deleteValue
      );
    formik.values[field.name] = updatedValue;
    setIsDeleted(!isDeleted);
  };

  return (
    <div className="block">
      <div className="flex w-full">
        <TextField
          id="outlined-basic"
          label={"label"}
          variant="outlined"
          size="small"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full"
        />
        <button
          className="bg-green-500 p-1 text-sm text-white"
          type="button"
          onClick={addValues}
        >
          Add+
        </button>
      </div>
      <div className="w-full gap-2">
        {Array.isArray(formik.values[field.name])
          ? formik.values[field.name]?.map((value: string) => (
              <Chip
                className="m-2"
                key={value}
                label={value}
                onDelete={() => handleDelete(value)}
              />
            ))
          : null}
      </div>
    </div>
  );
};
export default MultipleInputItems;
