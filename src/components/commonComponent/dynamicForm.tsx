import SelectTag from "formFields/selectTag";
import InputTag from "formFields/inputTag";
import { useState } from "react";
import MultipleInputItems from "formFields/multipleInputItems";
import { useAppDispatch } from "hooks/useRedux";
import { addAttribute } from "store/slice/attributeSlice";

const DynamicForm = () => {
  const dispatch = useAppDispatch();
  const [formFields, setFormFields] = useState([
    {
      type: "input",
      name: "attributeName",
      placeholder: "name",
      value: "",
    },

    {
      type: "select",
      name: "status",
      placeholder: "status",
      menuitems: [
        { value: 1, title: "Active" },
        { value: 0, title: "Inactive" },
      ],
      value: 1,
    },
    {
      type: "multipleInput",
      name: "attributeValues",
      placeholder: "values",
      value: [],
    },
  ]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formSubmitValue = formFields.reduce((obj: any, field) => {
      obj[field.name] = field.value;
      return obj;
    }, {});
    console.log(formSubmitValue);
    dispatch(addAttribute(formSubmitValue));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 w-[50vw] md:[30vw] lg:w-[20vw]"
    >
      {formFields?.map((field) => {
        return (
          <div>
            {(() => {
              switch (field?.type) {
                case "input":
                  return (
                    <InputTag
                      key={field.name}
                      field={field}
                      formFields={formFields}
                      setFormFields={setFormFields}
                    />
                  );
                case "multipleInput":
                  return (
                    <MultipleInputItems
                      key={field.name}
                      formFields={formFields}
                      field={field}
                      setFormFields={setFormFields}
                    />
                  );
                case "select":
                  return (
                    <SelectTag
                      key={field.name}
                      formFields={formFields}
                      field={field}
                      setFormFields={setFormFields}
                    />
                  );

                default:
                  return <div></div>;
              }
            })()}
          </div>
        );
      })}
      <div className="flex justify-end">
        <button className="bg-green-500 text-white p-1 text-sm " type="submit">
          Upload
        </button>
      </div>
    </form>
  );
};
export default DynamicForm;
