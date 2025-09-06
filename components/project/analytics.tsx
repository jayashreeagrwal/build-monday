"use client";

import { Separator } from "@radix-ui/react-separator";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { AnalyticsCard } from "./analytics-cards";

// Define a simple type for local usage
interface AnalyticsData {
  taskCount: number;
  taskDifference: number;
  assignedTaskCount: number;
  assignedTaskDifference: number;
  completedTaskCount: number;
  completedTaskDifference: number;
  overdueTaskCount: number;
  overdueTaskDifference: number;
  incompleteTaskCount: number;
  incompleteTaskDifference: number;
}

export const Analytics = () => {
  // ✅ Mock data for UI preview
  const data: AnalyticsData = {
    taskCount: 50,
    taskDifference: 5,
    assignedTaskCount: 20,
    assignedTaskDifference: 2,
    completedTaskCount: 15,
    completedTaskDifference: 3,
    overdueTaskCount: 10,
    overdueTaskDifference: -2,
    incompleteTaskCount: 25,
    incompleteTaskDifference: 1,
  };

  return (
    <ScrollArea className="border rounded-lg w-full whitespace-nowrap shrink-0">
      <div className="w-full flex flex-row">
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Total Tasks"
            value={data.taskCount}
            variant={data.taskDifference > 0 ? "up" : "down"}
            increaseValue={data.taskDifference}
          />
          <Separator direction="vertical" />
        </div>

        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Assigned Tasks"
            value={data.assignedTaskCount}
            variant={data.assignedTaskDifference > 0 ? "up" : "down"}
            increaseValue={data.assignedTaskDifference}
          />
          <Separator direction="vertical" />
        </div>

        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Completed Tasks"
            value={data.completedTaskCount}
            variant={data.completedTaskDifference > 0 ? "up" : "down"}
            increaseValue={data.completedTaskDifference}
          />
          <Separator direction="vertical" />
        </div>

        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Overdue Tasks"
            value={data.overdueTaskCount}
            variant={data.overdueTaskDifference > 0 ? "up" : "down"}
            increaseValue={data.overdueTaskDifference}
          />
          <Separator direction="vertical" />
        </div>

        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Incomplete Tasks"
            value={data.incompleteTaskCount}
            variant={data.incompleteTaskDifference > 0 ? "up" : "down"}
            increaseValue={data.incompleteTaskDifference}
          />
        </div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
