import React from "react";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TbFileInvoice } from "react-icons/tb";
import { IoBag } from "react-icons/io5";
import { Flex, Text, Box, Stack, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <Flex py={5} px={4} justify="center" bg="teal.600">
        <Text fontWeight="bold" color="white" fontSize="2xl">
        Task Management Application
        </Text>
      </Flex>
      <Box display="flex" justifyContent="center" alignItems="center" mt="16">
        <Stack direction="row" spacing={4} pr="16">
          <Button
            leftIcon={<MdOutlineProductionQuantityLimits />}
            colorScheme="teal"
            variant="solid"
          >
            <NavLink
              to="/task"
              className="nav-link"
              activeClassName="nav-link-active"
            >
              <Text
                fontWeight="bold"
                color="white"
                fontSize="xl"
                backdropFilter="blur(8px)"
              >
                Task
              </Text>
            </NavLink>
          </Button>
        </Stack>

      </Box>
    </>
  );
};

export default NavbarComponent;
