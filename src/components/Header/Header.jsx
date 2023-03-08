import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Image,
  Select,
  Stack,
} from "@chakra-ui/react";
import cart from "../../assets/cart.svg";

const Header = () => {
  return (
    <Box display="flex" justifyContent="space-between" mx="3%">
      <Stack spacing={5} direction="row">
        <Checkbox colorScheme="red" defaultChecked>
          가격(price)
        </Checkbox>
        <Checkbox colorScheme="green" defaultChecked>
          공간(spaceCategory)
        </Checkbox>
      </Stack>
      <Box display="flex" justifyContent="right" padding="8">
        <Button
          backgroundColor="transparent"
          variant="solid"
          colorScheme="white"
        >
          <Image src={cart} alt="cart" w="10" h="10" />
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
