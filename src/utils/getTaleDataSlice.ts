import { fetchAttribute } from "store/slice/attributeSlice";

export const getTableDataSlice = (page: string) => {
  switch (page) {
    case "attribute":
      return fetchAttribute();
  }
};
