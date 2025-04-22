import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { FC, useState } from "react";
import DynamicForm from "./dynamicForm";
import { Modal } from "@mui/material";

interface props {
  page: string;
}

const TableOperation: FC<props> = ({ page }) => {
  const [formOpen, setFormOpen] = useState<boolean>(false);

  const handleClose = () => setFormOpen(false);

  return (
    <>
      <div className="w-full flex  justify-end space-x-3">
        <button
          onClick={() => setFormOpen(true)}
          className="p-2 rounded-md bg-green-600 text-white text-sm"
        >
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
      {formOpen && (
        <Modal
          open={formOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="flex justify-center items-center"
        >
          <div className="bg-white absolute  p-6">
            <DynamicForm />
          </div>
        </Modal>
      )}
    </>
  );
};
export default TableOperation;
