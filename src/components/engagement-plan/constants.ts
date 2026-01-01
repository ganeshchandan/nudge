import type {
  TaskListColumns,
  TaskListRowData,
} from "@components/engagement-plan/types";

export const TASK_LIST_COLUMNS: TaskListColumns = [
  {
    headerName: "Task Name",
    field: "taskName",
  },
  {
    headerName: "Due Date",
    field: "dueDate",
  },
  {
    headerName: "Completion %",
    field: "completion",
    className: "completion-cell",
  },
  {
    headerName: "Owner",
    field: "owner",
  },
];

export const SAMPLE_TASK_DATA: TaskListRowData[] = [
  {
    taskId: 1,
    taskName: "Identify the channel of introduction/ meeting",
    dueDate: "Sep 15, 2025",
    completion: 25,
    owner: "Eliza",
    imageName: "assignee1",
  },
  {
    taskId: 2,
    taskName:
      "Identification of right conversation theme +Internal validation via sources & influencers",
    dueDate: "Sep 28, 2025",
    completion: 24,
    owner: "Jasper",
    imageName: "assignee2",
  },
  {
    taskId: 3,
    taskName:
      "Identification of right point of entry Sudy Sep, 2025 Warm Introduction/Calendarize the connect",
    dueDate: "Oct 12, 2025",
    completion: 0,
    owner: "Manish Gupta",
    imageName: "assignee3",
  },
  {
    taskId: 4,
    taskName: "Execute first non-game time connect",
    dueDate: "Oct 15, 2025",
    completion: 100,
    owner: "Ritesh Dogra",
    imageName: "assignee4",
  },
  {
    taskId: 5,
    taskName: "Mobilize Content for first connect",
    dueDate: "Oct 23, 2025",
    completion: 0,
    owner: "Alex Dsouza",
    imageName: "assignee5",
  },
  {
    taskId: 6,
    taskName: "Targeted Engagement Initiation (Ensure hook sets)",
    dueDate: "Nov 06, 2025",
    completion: 0,
    owner: "Sophia",
    imageName: "assignee1",
  },
  {
    taskId: 7,
    taskName:
      "Summarize the So what, what worked, key takeaways from first connect. Pivot if needed Get the next meeting",
    dueDate: "Dec 18, 2025",
    completion: 0,
    owner: "John",
    imageName: "assignee6",
  },
];
