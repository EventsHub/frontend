import { useState, useCallback } from "react";

import * as styles from "./styles";

import Input from "../../shared/ui/input";
import Dropzone from "../../shared/ui/dropzone";
import Button from "../../shared/ui/button";

import Preview from "./preview";

interface Props {
  createEvent: (card: any) => void;
  onClose(): void;
}

const Form = ({ createEvent, onClose }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [startDate, setStartDate] = useState("");
  const [urlOnEvent, setUrlOnEvent] = useState("");
  const [file, setFile] = useState<File[] | null>(null);

  const onDrop = useCallback((userFile: File[]) => {
    setFile(userFile);
  }, []);

  const deleteFile = () => {
    setFile(null);
  };

  const onSubmit = () => {
    createEvent({
      title: title,
      description: description,
      address: address,
      startDate: startDate,
      urlOnEvent: urlOnEvent,
      file: file && file[0],
    });
    onClose();
  };

  return (
    <div className={styles.form}>
      <Input
        value={title}
        placeholder="Enter event title..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        value={description}
        placeholder="Enter event description..."
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input
        value={address}
        placeholder="Enter event address..."
        onChange={(e) => setAddress(e.target.value)}
      />
      <Input
        value={startDate}
        placeholder="Enter event start date..."
        onChange={(e) => setStartDate(e.target.value)}
      />
      <Input
        value={urlOnEvent}
        placeholder="Enter url on event page..."
        onChange={(e) => setUrlOnEvent(e.target.value)}
      />
      {!file ? (
        <Dropzone
          label="Drag 'n' drop some files here, or click to select files"
          onDrop={onDrop}
        />
      ) : (
        <Preview file={file} deleteFile={deleteFile} />
      )}

      <Button label="Create event" onClick={onSubmit} />
    </div>
  );
};

export default Form;
