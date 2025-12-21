import type { FC } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "@components/common/input/index.scss";

interface NudgeInput {
  className?: string;
  controlId: string;
  label: string;
  placeholder: string;
  type?: string;
  onChange?: React.ChangeEventHandler;
  isInvalid?: boolean;
}

export const NudgeInput: FC<NudgeInput> = ({
  controlId,
  label,
  onChange,
  className = "",
  ...props
}) => {
  return (
    <FloatingLabel
      controlId={controlId}
      label={label}
      className={`nudge-input-container ${className}`}
    >
      <Form.Control {...props} onChange={onChange} />
    </FloatingLabel>
  );
};
