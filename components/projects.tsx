"use client";

import { useState } from "react";
import Link from "next/link";
import { RiAddCircleFill } from "react-icons/ri";
import { cn } from "@/lib/utils";
import { ProjectAvatar } from "./project/project-avatar";
import { CreateProjectModal } from "./project/create-project-modal";

interface Project {
  id: string;
  name: string;
  imageUrl?: string;
}

interface ProjectsProps {
  workspaceId?: string;
  pathname?: string;
  projects?: Project[];
}

export const Projects = ({
  workspaceId = "demo-workspace",
  pathname = "/",
  projects = [
    { id: "1", name: "Project Alpha", imageUrl: "" },
    { id: "2", name: "Project Beta", imageUrl: "" },
  ],
}: ProjectsProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-y-2">
      {/* Header + Add button */}
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase text-neutral-500">Projects</p>
        <RiAddCircleFill
          onClick={() => setOpen(true)}
          className="size-5 text-neutral-500 cursor-pointer hover:opacity-75 transition"
        />
      </div>

      {/* Projects list */}
      {projects.map((project) => {
        const href = `/projects/${project.id}`;
        const isActive = pathname === href;

        return (
          <Link key={project.id} href={href}>
            <div
              className={cn(
                "flex items-center gap-2.5 p-2.5 rounded-md hover:opacity-75 transition cursor-pointer text-neutral-500",
                isActive && "bg-white shadow-sm hover:opacity-100 text-primary"
              )}
            >
              <ProjectAvatar image={project.imageUrl} name={project.name} />
              <span className="truncate">{project.name}</span>
            </div>
          </Link>
        );
      })}

      {/* Modal */}
      <CreateProjectModal open={open} onOpenChange={setOpen} />
    </div>
  );
};
