import * as styles from "./styles";

interface Props {
  value: string;
  placeholder?: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Input = ({ value, placeholder, onChange }: Props) => {
  return (
    <input
      className={styles.input}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
