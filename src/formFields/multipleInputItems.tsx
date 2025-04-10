import { Chip, TextField } from "@mui/material";
import { FC, useState } from "react";

interface props {
  formFields: any;
  setFormFields: any;
  field: any;
}
const MultipleInputItems: FC<props> = ({
  formFields,
  setFormFields,
  field,
}) => {
  const [inputValue, setInputValue] = useState<string>();

  const addValues = () => {
    if (inputValue) {
      if (field?.value?.length && field?.value.includes(inputValue)) {
        alert("already added");
      } else {
        field.value = [...field.value, inputValue];

        setInputValue("");
      }
    }
  };

  console.log(formFields);
  const handleDelete = (deleteValue: string) => {
    // setValues(values?.filter((value: String) => value !== deleteValue));
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
        <button onClick={addValues}>Add+</button>
      </div>
      <div className="w-full gap-2">
        {field?.value?.length
          ? field?.value?.map((value: string) => (
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
