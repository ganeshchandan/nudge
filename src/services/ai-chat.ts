import axios from "axios";
import { store } from "@stores";
import { pushMessages } from "@stores/reducers";

interface ChatResponse {
  answer: string;
  conversation_id?: string;
}

const CHAT_API_URL = import.meta.env.DEV
  ? "/api/v2/api/chatbot/chat" // Use Vite proxy: /api -> http://54.83.73.24:8000
  : "http://54.83.73.24:8000/v2/api/chatbot/chat";

export const getChatMessage = async (question: string): Promise<string> => {
  try {
    const response = await axios.post<ChatResponse>(
      CHAT_API_URL,
      {
        question,
        conversation_id: "",
        conversation_history: [],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000,
      }
    );

    const answer = response.data.answer;

    store.dispatch(pushMessages({ type: "agent", message: answer }));

    return answer;
  } catch (error) {
    // Dev fallback (same API, direct call)
    if (import.meta.env.DEV) {
      try {
        const fallbackResponse = await axios.post<ChatResponse>(
          "http://54.83.73.24:8000/v2/api/chatbot/chat",
          {
            question,
            conversation_id: "string",
            conversation_history: [],
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            timeout: 10000,
          }
        );

        const answer = fallbackResponse.data.answer;

        store.dispatch(pushMessages({ type: "agent", message: answer }));

        return answer;
      } catch (fallbackError) {
        console.error("Fallback failed:", fallbackError);
        throw fallbackError;
      }
    }

    throw error;
  }
};
