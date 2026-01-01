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
