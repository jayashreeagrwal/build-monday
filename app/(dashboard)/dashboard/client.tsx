"use client";

import { MemberAvatar } from "@/components/general/member-avatar";
import { Analytics } from "@/components/project/analytics";
import { ProjectAvatar } from "@/components/project/project-avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";

import { formatDistanceToNow } from "date-fns";
import { CalendarIcon, PlusIcon, SettingsIcon } from "lucide-react";
import Link from "next/link";

interface Task {
  $id: string;
  name: string;
  dueDate: string;
  project?: {
    name: string;
  };
}
interface Project {
  $id: string;
  name: string;
  imageUrl?: string;
}
interface Member {
  $id: string;
  name: string;
  email: string;
}

export const WorkspaceIdClient = () => {
  const workspaceId = "demo-workspace";

  const analytics = { totalTasks: 5, totalProjects: 2, totalMembers: 3 };

  const tasks: Task[] = [
    {
      $id: "t1",
      name: "Design landing page",
      dueDate: new Date().toISOString(),
      project: { name: "Project Alpha" },
    },
    {
      $id: "t2",
      name: "Fix auth bug",
      dueDate: new Date().toISOString(),
      project: { name: "Project Beta" },
    },
  ];

  const projects: Project[] = [
    { $id: "p1", name: "Project Alpha", imageUrl: "" },
    { $id: "p2", name: "Project Beta", imageUrl: "" },
  ];

  const members: Member[] = [
    { $id: "m1", name: "Alice Johnson", email: "alice@example.com" },
    { $id: "m2", name: "Bob Smith", email: "bob@example.com" },
    { $id: "m3", name: "Charlie Brown", email: "charlie@example.com" },
  ];

  return (
    <div className="h-full flex flex-col space-y-4">
      <Analytics data={analytics} />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <TaskList data={tasks} total={tasks.length} workspaceId={workspaceId} />
        <ProjectList
          data={projects}
          total={projects.length}
          workspaceId={workspaceId}
        />
        <MemberList
          data={members}
          total={members.length}
          workspaceId={workspaceId}
        />
      </div>
    </div>
  );
};

interface TaskListProps {
  data: Task[];
  total: number;
  workspaceId: string;
}

export const TaskList = ({ data, total, workspaceId }: TaskListProps) => {
  const createTask = () => console.log("Create task clicked");

  return (
    <div className="flex flex-col gap-y-4 col-span-1">
      <div className="bg-muted rounded-lg p-4">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">Tasks ({total})</p>
          <Button variant="muted" size="icon" onClick={createTask}>
            <PlusIcon className="size-4 text-neutral-400" />
          </Button>
        </div>
        <Separator className="my-4" />
        <ul className="flex flex-col gap-y-4">
          {data.map((task) => (
            <li key={task.$id}>
              <Link href={`/workspaces/${workspaceId}/tasks/${task.$id}`}>
                <Card className="shadow-none rounded-lg hover:opacity-75 transition">
                  <CardContent className="p-4">
                    <p className="text-lg font-medium truncate">{task.name}</p>
                    <div className="flex items-center gap-x-2">
                      <p>{task.project?.name}</p>
                      <div className="size-1 rounded-full bg-neutral-300" />
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarIcon className="size-3 mr-1" />
                        <span className="truncate">
                          {formatDistanceToNow(new Date(task.dueDate))}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
          {data.length === 0 && (
            <li className="text-sm text-muted-foreground text-center">
              No tasks found
            </li>
          )}
        </ul>
        <Button variant="muted" className="mt-4 w-full" asChild>
          <Link href={`/workspaces/${workspaceId}/tasks`}>Show All</Link>
        </Button>
      </div>
    </div>
  );
};

interface ProjectListProps {
  data: Project[];
  total: number;
  workspaceId: string;
}

export const ProjectList = ({ data, total, workspaceId }: ProjectListProps) => {
  const createProject = () => console.log("Create project clicked");

  return (
    <div className="flex flex-col gap-y-4 col-span-1">
      <div className="bg-white border rounded-lg p-4">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">Projects ({total})</p>
          <Button variant="secondary" size="icon" onClick={createProject}>
            <PlusIcon className="size-4 text-neutral-400" />
          </Button>
        </div>
        <Separator className="my-4" />
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {data.map((project) => (
            <li key={project.$id}>
              <Link href={`/workspaces/${workspaceId}/projects/${project.$id}`}>
                <Card className="shadow-none rounded-lg hover:opacity-75 transition">
                  <CardContent className="flex items-center gap-x-2.5 p-4">
                    <ProjectAvatar
                      name={project.name}
                      image={project.imageUrl}
                      className="size-12"
                      fallbackClassName="text-lg"
                    />
                    <p className="text-lg font-medium truncate">
                      {project.name}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
          {data.length === 0 && (
            <li className="text-sm text-muted-foreground text-center">
              No projects found
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

interface MemberListProps {
  data: Member[];
  total: number;
  workspaceId: string;
}

export const MemberList = ({ data, total, workspaceId }: MemberListProps) => {
  return (
    <div className="flex flex-col gap-y-4 col-span-1">
      <div className="bg-white border rounded-lg p-4">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">Members ({total})</p>
          <Button variant="secondary" size="icon" asChild>
            <Link href={`/workspaces/${workspaceId}/members`}>
              <SettingsIcon className="size-4 text-neutral-400" />
            </Link>
          </Button>
        </div>
        <Separator className="my-4" />
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((member) => (
            <li key={member.$id}>
              <Card className="shadow-none rounded-lg overflow-hidden">
                <CardContent className="p-3 flex flex-col items-center gap-x-2">
                  <MemberAvatar name={member.name} className="size-12" />
                  <div className="flex flex-col items-center overflow-hidden">
                    <p className="text-lg font-medium line-clamp-1">
                      {member.name}
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {member.email}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </li>
          ))}
          {data.length === 0 && (
            <li className="text-sm text-muted-foreground text-center">
              No members found
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
