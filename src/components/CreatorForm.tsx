import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import createThing from "../services/createThing";
import Loading from "./Loading";

const IdeaForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState<string>("");

  const handleTitleChange = (event: { target: { value: any } }) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event: { target: { value: any } }) => {
    setBody(event.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const response = await createThing({
      title,
      body,
    });
    if (response.error) {
      setMessage(response.error);
      onOpen();
    } else {
      setMessage("successfully created");
      onOpen();
      setTitle("");
      setBody("");
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Flex flexDirection="column" alignItems="left" mt={2}>
        <Input
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
          mb={2}
        />
        <Textarea
          placeholder="body"
          value={body}
          onChange={handleBodyChange}
          mb={4}
        />
        <Button
          onClick={handleSubmit}
          isDisabled={title.length < 1 || body.length < 1}
        >
          Submit
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Error</ModalHeader>
          <ModalBody>
            <p>{message}</p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default IdeaForm;
