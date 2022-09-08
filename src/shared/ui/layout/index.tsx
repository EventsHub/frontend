import * as styles from "./styles";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
