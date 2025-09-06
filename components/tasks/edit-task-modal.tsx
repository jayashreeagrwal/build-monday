"use client";

import { ResponsiveModal } from "../general/responsive-modal";
import { EditTaskFormWrapper } from "./edit-task-form-wrapper";

interface EditTaskModalProps {
  taskId?: string;
  onClose: () => void;
}

export const EditTaskModal = ({ taskId, onClose }: EditTaskModalProps) => {
  return (
    <ResponsiveModal open={!!taskId} onOpenChange={onClose}>
      {taskId && <EditTaskFormWrapper id={taskId} onCancel={onClose} />}
    </ResponsiveModal>
  );
};
