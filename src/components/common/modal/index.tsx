import { type FC, type PropsWithChildren } from "react";
import "@components/common/modal/index.scss";
import { Modal, type ModalProps } from "react-bootstrap";

interface NudgeModal extends ModalProps {
  className?: string;
  show?: boolean;
}

export const NudgeModal: FC<PropsWithChildren<NudgeModal>> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <Modal
      className={`nudge-modal ${className}`}
      {...props}
      autoFocus={false}
      restoreFocus={false}
    >
      {children}
    </Modal>
  );
};
