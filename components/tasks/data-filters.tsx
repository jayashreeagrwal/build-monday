import { FolderIcon, ListChecksIcon, UserIcon } from "lucide-react";
import { DatePicker } from "@/components/ui/date-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

// Mocking TaskStatus
enum TaskStatus {
  BACKLOG = "BACKLOG",
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  IN_REVIEW = "IN_REVIEW",
  DONE = "DONE",
}

// Mock data
const mockProjects = {
  documents: [
    { $id: "proj1", name: "Project Alpha" },
    { $id: "proj2", name: "Project Beta" },
  ],
};

const mockMembers = {
  documents: [
    { $id: "mem1", name: "Alice" },
    { $id: "mem2", name: "Bob" },
  ],
};

interface DataFiltersProps {
  hideProjectFilter?: boolean;
}

export const DataFilters = ({ hideProjectFilter }: DataFiltersProps) => {
  // Use mock data directly
  const projects = mockProjects;
  const members = mockMembers;

  const projectOptions = projects?.documents.map((project) => ({
    value: project.$id,
    label: project.name,
  }));

  const memberOptions = members?.documents.map((member) => ({
    value: member.$id,
    label: member.name,
  }));

  // Use local state for filters
  const [filters, setFilters] = useState<{
    status: TaskStatus | null;
    assigneeId: string | null;
    projectId: string | null;
    dueDate: string | null;
  }>({
    status: null,
    assigneeId: null,
    projectId: null,
    dueDate: null,
  });

  const onStatusChange = (value: string) => {
    if (value === "all") {
      setFilters({ ...filters, status: null });
    } else {
      setFilters({ ...filters, status: value as TaskStatus });
    }
  };

  const onAssigneeChange = (value: string) => {
    if (value === "all") {
      setFilters({ ...filters, assigneeId: null });
    } else {
      setFilters({ ...filters, assigneeId: value });
    }
  };

  const onProjectChange = (value: string) => {
    if (value === "all") {
      setFilters({ ...filters, projectId: null });
    } else {
      setFilters({ ...filters, projectId: value });
    }
  };

  const onDueDateChange = (date: Date | undefined) => {
    setFilters({ ...filters, dueDate: date ? date.toISOString() : null });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-2">
      <Select
        defaultValue={filters.status ?? undefined}
        onValueChange={onStatusChange}
      >
        <SelectTrigger className="w-full lg:w-auto h-8">
          <div className="flex items-center pr-2">
            <ListChecksIcon className="size-4 mr-2" />
            <SelectValue placeholder="All statuses" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All statuses</SelectItem>
          <SelectSeparator />
          <SelectItem value={TaskStatus.BACKLOG}>Backlog</SelectItem>
          <SelectItem value={TaskStatus.IN_PROGRESS}>In Progress</SelectItem>
          <SelectItem value={TaskStatus.IN_REVIEW}>In Review</SelectItem>
          <SelectItem value={TaskStatus.TODO}>Todo</SelectItem>
          <SelectItem value={TaskStatus.DONE}>Done</SelectItem>
        </SelectContent>
      </Select>
      <Select
        defaultValue={filters.assigneeId ?? undefined}
        onValueChange={onAssigneeChange}
      >
        <SelectTrigger className="w-full lg:w-auto h-8">
          <div className="flex items-center pr-2">
            <UserIcon className="size-4 mr-2" />
            <SelectValue placeholder="All assignees" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All assignees</SelectItem>
          <SelectSeparator />
          {memberOptions?.map((member) => (
            <SelectItem key={member.value} value={member.value}>
              {member.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {!hideProjectFilter && (
        <Select
          defaultValue={filters.projectId ?? undefined}
          onValueChange={onProjectChange}
        >
          <SelectTrigger className="w-full lg:w-auto h-8">
            <div className="flex items-center pr-2">
              <FolderIcon className="size-4 mr-2" />
              <SelectValue placeholder="All projects" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All projects</SelectItem>
            <SelectSeparator />
            {projectOptions?.map((project) => (
              <SelectItem key={project.value} value={project.value}>
                {project.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
      <DatePicker
        placeholder="Due date"
        className="h-8 w-full lg:w-auto"
        value={filters.dueDate ? new Date(filters.dueDate) : undefined}
        onChange={onDueDateChange}
      />
    </div>
  );
};