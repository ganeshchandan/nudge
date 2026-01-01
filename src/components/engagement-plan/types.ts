export interface TaskListColumn {
  headerName: string;
  field: string;
  className?: string;
}

export type TaskListStatus = "none" | "danger" | "completed";

export interface TaskListRowData {
  taskId: number;
  taskName: string;
  dueDate: string;
  completion: number;
  owner: string;
  imageName: string;
  status?: TaskListStatus;
}

export type TaskListColumns = TaskListColumn[];

export interface EngagementPlanDetailsAssest {
  id: number;
  name: string;
  value: string;
  type: "file" | "dir";
}

export interface MeetingNote {
  id: number;
  name: string;
  value: string;
  type: "doc" | "video" | "ppt";
}

export interface PlanMeetingNote {
  _id: number;
  date: string;
  notes: MeetingNote[];
}
