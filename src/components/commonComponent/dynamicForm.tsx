import SelectTag from "formFields/selectTag";
import InputTag from "formFields/inputTag";
import MultipleInputItems from "formFields/multipleInputItems";
import { useAppDispatch } from "hooks/useRedux";
import { addAttribute } from "store/slice/attributeSlice";
import { useFormik } from "formik";
import { getFormDetails } from "utils/getFormDetails";
import { FC, useState } from "react";
// import { attributeInitialValue } from "constants/attributePage/form/initialValue";
// import { attributeValidationSchema } from "constants/attributePage/form/attributeValidationSchema";

interface props {
  page: string;
}

const DynamicForm: FC<props> = ({ page }) => {
  const dispatch = useAppDispatch();
  const [formDetails, setFormDetails] = useState(getFormDetails(page));
  const initialValues = formDetails ? formDetails.initialValue : [];
  const validationSchema = formDetails?.validationSchema;
  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(addAttribute(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="space-y-3 ">
        {formDetails?.formField?.map((field) => {
          return (
            <>
              {(() => {
                switch (field?.type) {
                  case "input":
                    return (
                      <InputTag
                        key={field.name}
                        field={field}
                        formik={formik}
                      />
                    );
                  case "multipleInput":
                    return (
                      <MultipleInputItems
                        key={field.name}
                        field={field}
                        formik={formik}
                      />
                    );
                  case "select":
                    return (
                      <SelectTag
                        key={field.name}
                        field={field}
                        formik={formik}
                      />
                    );

                  default:
                    return <div></div>;
                }
              })()}
            </>
          );
        })}
        <div className="flex justify-end">
          <button
            className="bg-green-500 text-white p-1 text-sm "
            type="submit"
          >
            Upload
          </button>
        </div>
      </div>
    </form>
  );
};
export default DynamicForm;
