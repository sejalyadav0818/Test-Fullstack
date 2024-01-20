import React from "react";
import {
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  ButtonGroup,
  Text,
  useToast,
} from "@chakra-ui/react";
import { EditIcon, AddIcon } from "@chakra-ui/icons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import Popup from "../../../Common/Popup";
import { TaskvalidationSchema } from "../../../validation/validation";

const TaskForm = ({ taskData, getTaskData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const performAction = (values) => {
    if (taskData) {
      // Edit operation
      const { _id, name, description, price } = values;
      axios
        .patch(`http://localhost:5000/task/${_id}`, {
          name,
          description,
          price,
        })
        .then((res) => {
          getTaskData();
          toast({
            title: res.data.message,
            status: "success",
            isClosable: true,
            position: "bottom",
            duration: 2000,
          });
          onClose();
        })
        .catch((error) => {
          toast({
            title: error.message,
            status: "error",
            isClosable: true,
            position: "bottom",
            duration: 2000,
          });
          onClose();
        });
    } else {
      // Add operation
      axios
        .post(`http://localhost:5000/task`, values, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          getTaskData();
          toast({
            title: res.data.message,
            status: "success",
            isClosable: true,
            position: "bottom",
            duration: 5000,
          });
          onClose();
        })
        .catch((error) => {
          toast({
            title: error.response.message,
            status: "error",
            isClosable: true,
            position: "bottom",
            duration: 5000,
          });
          onClose();
        });
    }
  };

  return (
    <div>
      <Button
        colorScheme="teal"
        onClick={onOpen}
        rightIcon={taskData ? <EditIcon mb={1} /> : <AddIcon mb={1} />}
      >
        {taskData ? "Edit" : "Add"}
      </Button>

      <Popup
        title={`${taskData ? "Edit" : "Add"} Task`}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <Formik
          initialValues={
            taskData || { name: "", description: "", price: "" }
          }
          validationSchema={TaskvalidationSchema}
          onSubmit={(values) => {
            performAction(values);
          }}
        >
          {({
            isValid,
            dirty,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <FormControl isRequired mt={8}>
                <FormLabel>Name</FormLabel>
                <Field type="text" name="name" autoComplete="off" as={Input} />
                <ErrorMessage name="name" component={Text} color="tomato" />
              </FormControl>
              <FormControl isRequired mt={8}>
                <FormLabel>Description</FormLabel>
                <Field
                  type="text"
                  name="description"
                  as={Input}
                  autoComplete="off"
                />
                <ErrorMessage
                  name="description"
                  component={Text}
                  color="tomato"
                />
              </FormControl>
              <FormControl isRequired mt={8}>
                <FormLabel>Price</FormLabel>

                <Field
                  type="number"
                  name="price"
                  as={Input}
                  autoComplete="off"
                />
                <ErrorMessage name="price" component={Text} color="tomato" />
              </FormControl>

              <ButtonGroup variant="outline" spacing="3" my={8}>
                <Button
                  type="submit"
                  colorScheme="blue"
                  disabled={!isValid || !dirty}
                >
                  {taskData ? "Update" : "Add"}
                </Button>

                <Button colorScheme="blue" onClick={onClose} variant="outline">
                  Cancel
                </Button>
              </ButtonGroup>
            </form>
          )}
        </Formik>
      </Popup>
    </div>
  );
};

export default TaskForm;
