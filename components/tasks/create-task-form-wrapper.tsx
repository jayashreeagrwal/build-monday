import { LoaderIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CreateTaskForm } from "./create-task-form";

// Mock data
const mockProjects = {
  documents: [
    { $id: "proj1", name: "Project Alpha", imageUrl: "/images/project-alpha.png" },
    { $id: "proj2", name: "Project Beta", imageUrl: "/images/project-beta.png" },
  ],
};

const mockMembers = {
  documents: [
    { $id: "mem1", name: "Alice" },
    { $id: "mem2", name: "Bob" },
  ],
};

interface CreateTaskFormWrapperProps {
  onCancel: () => void;
}

export const CreateTaskFormWrapper = ({
  onCancel,
}: CreateTaskFormWrapperProps) => {
  // Use mock data directly instead of fetching from an API
  const projects = mockProjects;
  const members = mockMembers;

  // The loading state is no longer needed since we're using static data
  const isLoading = false;

  const projectOptions = projects?.documents.map((project) => ({
    id: project.$id,
    name: project.name,
    imageUrl: project.imageUrl,
  }));

  const memberOptions = members?.documents.map((member) => ({
    id: member.$id,
    name: member.name,
  }));

  if (isLoading) {
    return (
      <Card className="w-full h-[714px] border-none shadow-none">
        <CardContent className="flex items-center justify-center h-full">
          <LoaderIcon className="size-5 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    );
  }

  return (
    <CreateTaskForm
      onCancel={onCancel}
      projectOptions={projectOptions ?? []}
      memberOptions={memberOptions ?? []}
    />
  );
};