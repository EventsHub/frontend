import { useEffect } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import * as styles from "./styles";

interface Props {
  header?: string;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  onClose(): void;
}

const Modal = ({ header, content, footer, onClose }: Props) => {
  useEffect(() => {
    disableBodyScroll(document.body);
    return () => enableBodyScroll(document.body);
  }, []);

  return (
    <div className={styles.overlay}>
      <div className={styles.cancel} onClick={onClose}></div>
      <div className={styles.modal}>
        {header && <div className={styles.header}>{header}</div>}
        {content && <div>{content}</div>}
        {footer && <div>{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;
