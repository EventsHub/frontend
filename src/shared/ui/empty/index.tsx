import * as styles from "./styles";
import { ReactSVG } from "react-svg";

interface Props {
  src: string;
  label?: string;
}

const Empty = ({ src, label }: Props) => {
  return (
    <div className={styles.wrapper}>
      <ReactSVG src={src} />
      <p className={styles.label}>{label}</p>
    </div>
  );
};

export default Empty;
