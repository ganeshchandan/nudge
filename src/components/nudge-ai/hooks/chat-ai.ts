import { setShowChatAi } from "@stores/reducers";
import { useDispatch } from "react-redux";

export const useChatAi = () => {
  const dispatch = useDispatch();

  const showHideChatAI = (showChatAI: boolean) =>
    dispatch(setShowChatAi(showChatAI));

  return { showHideChatAI };
};
