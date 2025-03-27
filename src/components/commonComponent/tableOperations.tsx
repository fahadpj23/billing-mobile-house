import AddIcon from "@mui/icons-material/Add";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
const TableOperation = () => {
  return (
    <div className="w-full flex  justify-end space-x-3">
      <button className="p-2 rounded-md bg-green-600 text-white text-sm">
        Add <AddIcon fontSize="small" />
      </button>
      {/* <button className="p-2 rounded-md bg-orange-600 text-white text-sm">
        Edit
        <ModeEditIcon fontSize="small" />
      </button> */}
      <button className="p-2 rounded-md bg-red-600 text-white text-sm">
        Delete
        <DeleteIcon fontSize="small" />
      </button>
    </div>
  );
};
export default TableOperation;
