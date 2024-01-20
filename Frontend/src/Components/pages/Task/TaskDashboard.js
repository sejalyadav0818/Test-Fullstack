import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  TableContainer,
  Flex,
  Spinner,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import TaskForm from "../Task/TaskForm";
import DeleteTask from "../Task/DeleteTask";
import Pagination from "../../../Common/Pagination";

const TaskDashboard = () => {
  const [taskData, settaskData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setcurrentPage] = useState(1);
  const postPerPage = 2;
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentTasks = taskData.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setcurrentPage(pageNumber);

  useEffect(() => {
    getTaskData();
  }, []);

  const getTaskData = () => {
    axios
      .get("http://localhost:5000/task")
      .then((res) => {
        const tasks = res.data.data;
        settaskData(tasks);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        pt={10}
        mt={10}
      >
        <TaskForm getTaskData={getTaskData} />
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" mt="10">
        <div>
          {loading ? (
            <Spinner
              thickness="4px"
              speed="0.8s"
              emptyColor="grey"
              color="blue"
              size="lg"
              mt="20"
            />
          ) : taskData.length > 0 ? (
            <>
              <TableContainer mb={5} mt={10}>
                <Table variant="striped">
                  <Thead>
                    <Tr>
                      <Th>ID</Th>
                      <Th>Name</Th>
                      <Th>Description</Th>
                      <Th>Price</Th>
                      <Th>Action</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {currentTasks.map((tasks) => (
                      <Tr key={tasks._id}>
                        <Td>{tasks._id}</Td>
                        <Td>{tasks.name}</Td>
                        <Td>{tasks.description}</Td>
                        <Td>{tasks.price}</Td>
                        <Td>
                          <Flex gap="2">
                            <DeleteTask
                              taskId={tasks._id}
                              getTaskData={getTaskData}
                            />
                            <TaskForm
                              taskData={tasks}
                              getTaskData={getTaskData}
                            />
                          </Flex>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
              {taskData.length > 2 && (
                <Pagination
                  currentPage={currentPage}
                  postPerPage={postPerPage}
                  totalPosts={taskData.length}
                  paginate={paginate}
                  setcurrentPage={setcurrentPage}
                />
              )}
            </>
          ) : (
            <Heading as="h3" size="lg" my="10">
              No Task found!!
            </Heading>
          )}
        </div>
      </Box>
    </>
  );
};

export default TaskDashboard;
