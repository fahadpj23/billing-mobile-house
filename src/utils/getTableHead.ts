import { ATTRIBUTE_TABLE_HEAD } from "constants/attributePage/attributeTable";

export const getTableHead = (page: string) => {
  switch (page) {
    case "attribute":
      return ATTRIBUTE_TABLE_HEAD;
  }
};
