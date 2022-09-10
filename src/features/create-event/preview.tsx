import { TrashIcon } from "@heroicons/react/24/solid";

import * as styles from "./styles";

interface Props {
  file: File[];
  deleteFile(): void;
}

const Preview = ({ file, deleteFile }: Props) => {
  const img = URL.createObjectURL(file[0]);

  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src={img} />
      <TrashIcon className={styles.trashIcon} onClick={deleteFile} />
    </div>
  );
};

export default Preview;
