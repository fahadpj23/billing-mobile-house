import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import DynamicForm from "./dynamicForm";
import { Modal } from "@mui/material";
const TableOperation = () => {
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
        >
          <div className="bg-white absolute top-[40%] left-[45%] p-6">
            <DynamicForm />
          </div>
        </Modal>
      )}
    </>
  );
};
export default TableOperation;
