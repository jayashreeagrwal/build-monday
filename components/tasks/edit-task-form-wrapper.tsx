"use client";

import { LoaderIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import { EditTaskForm } from "./edit-task-form";

interface EditTaskFormWrapperProps {
  onCancel: () => void;
  id: string;
}

export const EditTaskFormWrapper = ({
  onCancel,
  id,
}: EditTaskFormWrapperProps) => {
  const isLoading = false;

  const initialValues = {
    id,
    title: "Dummy Task",
    description: "This is a placeholder task description.",
    projectId: "project-1",
    assigneeId: "member-1",
  };

  const projectOptions = [
    { id: "project-1", name: "Project Alpha", imageUrl: "" },
    { id: "project-2", name: "Project Beta", imageUrl: "" },
  ];

  const memberOptions = [
    { id: "member-1", name: "Alice Johnson" },
    { id: "member-2", name: "Bob Smith" },
  ];

  if (isLoading) {
    return (
      <Card className="w-full h-[714px] border-none shadow-none">
        <CardContent className="flex items-center justify-center h-full">
          <LoaderIcon className="size-5 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    );
  }

  if (!initialValues) {
    return null;
  }

  return (
    <EditTaskForm
      onCancel={onCancel}
      projectOptions={projectOptions}
      memberOptions={memberOptions}
      initialValues={initialValues}
    />
  );
};
