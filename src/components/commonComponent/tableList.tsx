import { FC, useEffect, useMemo } from "react";
import TableOperation from "./tableOperations";
import { getTableHead } from "utils/getTableHead";
import { useAppDispatch, useAppSelector } from "hooks/useRedux";
import { getTableDataSlice } from "utils/getTaleDataSlice";
import { objectArrayToArray } from "utils/objectArrayToArray";

interface props {
  page: string;
}

const TableList: FC<props> = ({ page }) => {
  const dispatch = useAppDispatch();
  const tableData = useAppSelector((state) => state.user.attribute.entities);
  console.log(tableData);
  const TableHead = useMemo(() => {
    return getTableHead(page);
  }, [page]);

  useEffect(() => {
    const getTableData = getTableDataSlice(page);
    getTableData && dispatch(getTableData);
  }, [page, dispatch]);

  return (
    <div>
      <TableOperation page={page} />
      <div className="flex justify-between w-full p-2">
        <h1 className="w-full text-gray-600 hidden md:block">SL no</h1>
        {TableHead?.map((head: any) => (
          <h1 className="w-full text-gray-600 ">{head?.title}</h1>
        ))}
      </div>
      <div className="space-y-1 p-2">
        {tableData?.map((itemDetails: any, key: number) => (
          <div
            className={`flex justify-between w-full ${
              key % 2 === 0 ? "bg-gray-200" : "bg-white"
            }`}
          >
            <h1 className="w-full text-sm p-2">{key + 1}</h1>
            {TableHead?.map((head: any) => (
              <h1 className="w-full overflow-hidden text-sm p-2">
                {itemDetails[head.key] && Array.isArray(itemDetails[head.key])
                  ? objectArrayToArray(itemDetails[head.key])?.toString()
                  : itemDetails[head.key]}
              </h1>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default TableList;
