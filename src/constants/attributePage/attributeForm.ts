export const ATTRIBUTE_TABLE_FORM = [
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
];
