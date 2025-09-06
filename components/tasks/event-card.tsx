import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Member, Project, TaskStatus } from "@/lib/types";
import { MemberAvatar } from "../general/member-avatar";
import { ProjectAvatar } from "../project/project-avatar";

interface EventCardProps {
  title: string;
  assignee: Member;
  project: Project;
  status: TaskStatus;
  id: string;
}

const statusColorMap: Record<TaskStatus, string> = {
  [TaskStatus.BACKLOG]: "border-l-pink-400",
  [TaskStatus.TODO]: "border-l-red-400",
  [TaskStatus.IN_PROGRESS]: "border-l-yellow-400",
  [TaskStatus.IN_REVIEW]: "border-l-blue-400",
  [TaskStatus.DONE]: "border-l-emerald-400",
};

export const EventCard = ({
  title,
  assignee,
  project,
  status,
  id,
}: EventCardProps) => {


  return (
    <div className="px-2">
      <div
        className={cn(
          "p-1.5 text-xs bg-white text-primary border rounded-md border-l-4 flex flex-col gap-y-1.5 cursor-pointer hover:opacity-75 transition",
          statusColorMap[status]
        )}
      >
        <p>{title}</p>
        <div className="flex items-center gap-x-1">
          <MemberAvatar name={assignee?.name} />
          <div className="size-1 rounded-full bg-neutral-300" />
          <ProjectAvatar name={project?.name} image={project?.imageUrl} />
        </div>
      </div>
    </div>
  );
};
