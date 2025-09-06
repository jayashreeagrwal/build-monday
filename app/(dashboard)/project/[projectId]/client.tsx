"use client";

import { PencilIcon } from "lucide-react";
import Link from "next/link";

import { PageError } from "@/components/general/page-error";
import { PageLoader } from "@/components/general/page-loader";
import { Button } from "@/components/ui/button";

import { Analytics } from "@/components/project/analytics";
import { TaskViewSwitcher } from "@/components/tasks/task-view-switcher";
import { ProjectAvatar } from "@/components/project/project-avatar";

export const ProjectIdClient = () => {
  const project = {
    $id: "123",
    name: "Demo Project",
    imageUrl: null,
    workspaceId: "workspace_1",
  };

  const analytics = {
    tasksCompleted: 12,
    tasksPending: 5,
    members: 3,
  };

  const isLoading = false;
  const hasError = false;

  if (isLoading) {
    return <PageLoader />;
  }

  if (hasError || !project) {
    return <PageError message="Project not found." />;
  }

  return (
    <div className="flex flex-col gap-y-4">
      {/* Project Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <ProjectAvatar
            name={project.name}
            image={project.imageUrl}
            className="size-8"
          />
          <p className="text-lg font-semibold">{project.name}</p>
        </div>
        <div>
          <Button variant="secondary" size="sm" asChild>
            <Link
              href={`/workspaces/${project.workspaceId}/projects/${project.$id}/settings`}
            >
              <PencilIcon className="size-4 mr-2" />
              Edit Project
            </Link>
          </Button>
        </div>
      </div>

      {/* Analytics (mocked) */}
      {analytics && <Analytics data={analytics} />}

      {/* Task View */}
      <TaskViewSwitcher hideProjectFilter={true} />
    </div>
  );
};
