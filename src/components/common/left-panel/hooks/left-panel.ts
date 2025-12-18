import { updateSelectedOption } from "@stores/reducers";
import { useDispatch } from "react-redux";

export const useLeftPanel = () => {
  const dispatch = useDispatch();
  const hanldeOptionSelect = (selectedOption: string) =>
    dispatch(updateSelectedOption(selectedOption));

  return { hanldeOptionSelect };
};
