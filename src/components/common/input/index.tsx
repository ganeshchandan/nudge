import type { FC } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "@components/common/input/index.scss";

interface NudgeInput {
  id?: string;
  className?: string;
  controlId: string;
  label: string;
  placeholder: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<Element>, id?: string) => void;
  isInvalid?: boolean;
  value?: string;
}

export const NudgeInput: FC<NudgeInput> = ({
  controlId,
  label,
  onChange,
  className = "",
  id,
  ...props
}) => {
  const onInputChange: React.ChangeEventHandler = (event) => {
    onChange?.(event, id);
  };

  return (
    <FloatingLabel
      controlId={controlId}
      label={label}
      className={`nudge-input-container ${className}`}
    >
      <Form.Control {...props} onChange={onInputChange} />
    </FloatingLabel>
  );
};
