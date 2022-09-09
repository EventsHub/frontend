import * as styles from "./styles";

interface Props {
  title: string;
  element?: React.ReactNode;
}

const Header = ({ title, element }: Props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <div>{element}</div>
    </header>
  );
};

export default Header;
