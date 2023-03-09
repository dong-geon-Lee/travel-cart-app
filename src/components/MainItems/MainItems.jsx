import React, { useState } from "react";
import Modals from "../Modals/Modals";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addTravelToCart } from "../../redux-toolkit/productSlice";
import {
  Box,
  Button,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import { checkReservationItems, formattedNumber } from "../../utils/utils";

const ProductItems = ({ items }) => {
  const [disabled, setDisabled] = useState(false);
  const { idx, name, mainImage, price, spaceCategory } = items;
  const toast = useToast();
  const cartItems = useSelector((state) => state.product.carts);
  const dispatch = useDispatch();

  const handleReservations = () => {
    dispatch(addTravelToCart({ ...items }));
    setDisabled(true);
  };

  return (
    <Box border="1px solid #000" w="21rem">
      <Box display="flex" alignItems="center" gap="2" bg="purple.100" p="3">
        <Text fontSize="x-large">{idx} -</Text>
        <Text>{name}</Text>
      </Box>
      <Image src={mainImage} alt={mainImage} w="100%" h="100%" />
      <Grid
        templateColumns="repeat(2,1fr)"
        justifyItems="center"
        alignItems="center"
        mt="4"
      >
        <GridItem w="100%" h="100%">
          <FormLabel textAlign="center" w="100%">
            가격
          </FormLabel>
          <Text color="blue.600" fontSize="2xl" textAlign="center" w="100%">
            {formattedNumber(price) + " 원"}
          </Text>
        </GridItem>
        <GridItem w="100%" h="100%">
          <FormLabel textAlign="center" w="100%">
            공간
          </FormLabel>
          <Text color="blue.600" fontSize="2xl" textAlign="center" w="100%">
            {spaceCategory}
          </Text>
        </GridItem>
      </Grid>

      <Box display="flex" gap="3" p="3.5" alignItems="center">
        <Button
          onClick={() => {
            handleReservations();
            toast({
              title: name,
              description: "예약이 완료되었습니다!",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          }}
          width="100%"
          flex="1"
          colorScheme="messenger"
          isDisabled={disabled || checkReservationItems(cartItems, name)}
          display="flex"
          alignItems="center"
          py="6"
        >
          예약하기
        </Button>
        <Link state={items} style={{ flex: 1 }}>
          <Modals />
        </Link>
      </Box>
    </Box>
  );
};

export default ProductItems;
