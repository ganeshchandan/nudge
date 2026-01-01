export interface TaskListColumn {
  headerName: string;
  field: string;
  className?: string;
}

export interface TaskListRowData {
  taskId: number;
  taskName: string;
  dueDate: string;
  completion: number;
  owner: string;
  imageName: string;
}

export type TaskListColumns = TaskListColumn[];
