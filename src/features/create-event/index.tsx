import { useState } from "react";

import Button from "../../shared/ui/button";
import Modal from "../../shared/ui/modal";

import Form from "./form";

import useCardStore from "../../stores/cardStore";

const CreateEvent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const createEvent = useCardStore((state) => state.createEvent);

  return (
    <div>
      <Button label="New event" onClick={() => setIsVisible(true)} />
      {isVisible && (
        <Modal
          header="Create event"
          content={
            <Form
              createEvent={createEvent}
              onClose={() => setIsVisible(false)}
            />
          }
          onClose={() => setIsVisible(false)}
        />
      )}
    </div>
  );
};

export default CreateEvent;
