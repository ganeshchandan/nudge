import type { TaskListRowData } from "@components/engagement-plan/types";
import axios from "@services/axios-interceptors";

// Define the profile details response interface based on API structure
export interface TaskLists {
  taskId: number;
  taskName: string;
  dueDate: string;
  completion: number;
  owner: string;
  imageName?: string;
  status?: string;
}

// Use proxy in development, direct URL in production
const PROFILE_DETAILS_API_BASE_URL = import.meta.env.DEV
  ? "/api/v2/api/engagement-plan" // Use Vite proxy: /api -> http://54.83.73.24:8000
  : "http://54.83.73.24:8000/v2/api/engagement-plan"; // Direct URL in production

/**
 * Fetches profile details from the API
 * @param profileId - The profile ID to fetch details for
 * @returns Promise with profile details data
 */
export const fetchTaskDetails = async (
  companyId: string
): Promise<TaskListRowData[]> => {
  try {
    const url = `${PROFILE_DETAILS_API_BASE_URL}/${companyId}/tasks`;
    const response = await axios.get<any[]>(url, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 10000, // 10 second timeout
    });
    return response.data.map(
      (d) =>
        ({
          taskId: d.task_id,
          taskName: d.task_name,
          dueDate: d.due_date,
          completion: 12,
          owner: d.assigned_to,
          imageName: "assignee1",
          status: d.status,
        } as TaskListRowData)
    );
  } catch (error) {
    // If proxy fails in dev, try direct URL as fallback

    throw error;
  }
};
