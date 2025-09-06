"use client";

import Link from "next/link";
import { RiAddCircleFill } from "react-icons/ri";
import { cn } from "@/lib/utils";
import { ProjectAvatar } from "./project/project-avatar";

interface Project {
  id: string;
  name: string;
  imageUrl?: string;
}

interface ProjectsProps {
  workspaceId?: string;
  pathname?: string;
  projects?: Project[];
  onCreateProject?: () => void;
}

export const Projects = ({
  workspaceId = "demo-workspace",
  pathname = "/workspaces/demo-workspace",
  projects = [
    { id: "1", name: "Project Alpha", imageUrl: "" },
    { id: "2", name: "Project Beta", imageUrl: "" },
  ],
  onCreateProject = () => console.log("Create project clicked"),
}: ProjectsProps) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase text-neutral-500">Projects</p>
        <RiAddCircleFill
          onClick={onCreateProject}
          className="size-5 text-neutral-500 cursor-pointer hover:opacity-75 transition"
        />
      </div>
      {projects.map((project) => {
        const href = `/workspaces/${workspaceId}/projects/${project.id}`;
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
    </div>
  );
};
