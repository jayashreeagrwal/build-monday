"use client";

import { useState } from "react";
import { CreateTaskFormWrapper } from "./create-task-form-wrapper";
import { ResponsiveModal } from "../general/responsive-modal";

export const CreateTaskModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateTaskFormWrapper onCancel={close} />
    </ResponsiveModal>
  );
};