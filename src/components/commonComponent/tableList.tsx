import { useEffect } from "react";
import TableOperation from "./tableOperations";
import { useAppDispatch } from "store";
import { getEntities } from "reducers/attribute.reducer";

const TableList = () => {
  const dispatch = useAppDispatch();

  const TableHead = [
    { title: "Name", key: "name" },
    { title: "Status", key: "status" },
    { title: "Values", key: "values" },
  ];
  const item = [
    {
      name: "FDFF",
      status: "active",
      values: ["DFd", "FDfd", "klg"],
    },
    {
      name: "FDFF",
      status: "active",
      values: ["DFd", "FDfd", "klg"],
    },
    {
      name: "FDFF",
      status: "active",
      values: [
        "DFd",
        "FDfd",
        "klg",
        "DFd",
        "FDfd",
        "DFd",
        "FDfd",
        "DFd",
        "FDfd",
        "klg",
        "DFd",
        "FDfd",
        "DFd",
        "FDfd",
      ],
    },
  ];

  useEffect(() => {
    dispatch(getEntities());
  });

  return (
    <div>
      <TableOperation />
      <div className="flex justify-between w-full p-2">
        <h1 className="w-full text-gray-600 hidden md:block">SL no</h1>
        {TableHead?.map((head: any) => (
          <h1 className="w-full text-gray-600 ">{head?.title}</h1>
        ))}
      </div>
      <div className="space-y-1 p-2">
        {item?.map((itemDetails: any, key: number) => (
          <div
            className={`flex justify-between w-full ${
              key % 2 === 0 ? "bg-gray-200" : "bg-white"
            }`}
          >
            <h1 className="w-full text-sm p-2">{key + 1}</h1>
            {TableHead?.map((head: any) => (
              <h1 className="w-full overflow-hidden text-sm p-2">
                {itemDetails[head.key].toString()}
              </h1>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default TableList;
