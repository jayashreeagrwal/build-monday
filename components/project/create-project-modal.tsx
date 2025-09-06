"use client";

import { useState } from "react";
import { CreateProjectForm } from "./create-project-form";
import { ResponsiveModal } from "../general/responsive-modal";

export const CreateProjectModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      {/* Button to open modal (optional) */}
      <button onClick={open} className="btn-primary">
        Create Project
      </button>

      <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
        <CreateProjectForm onCancel={close} />
      </ResponsiveModal>
    </>
  );
};
