import * as styles from "./styles";

interface Props {
  children: React.ReactNode;
}

const Grid = ({ children }: Props) => {
  return <div className={styles.gridWrapper}>{children}</div>;
};

export default Grid;
