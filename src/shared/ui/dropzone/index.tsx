import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import * as styles from "./styles";

interface Props {
  label: string;
  maxFiles?: number;
}

const Dropzone = ({ label, maxFiles = 1 }: Props) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    return acceptedFiles;
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/jpg": [],
      "image/png": [],
      "image/jpeg": [],
    },
    maxFiles: maxFiles,
  });

  return (
    <div className={styles.wrapper}>
      <div {...getRootProps({ className: styles.dropzone })}>
        <input {...getInputProps()} />
        <p className={styles.label}>{label}</p>
      </div>
    </div>
  );
};

export default Dropzone;
