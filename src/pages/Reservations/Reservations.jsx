import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { travelData } from "../../data/data";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.svg";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import {
  decreaseQty,
  increaseQty,
  removeCartItems,
} from "../../redux-toolkit/productSlice";
import { formattedNumber } from "../../utils/utils";

const Reservations = () => {
  const cartItems = useSelector((state) => state.product.carts);
  console.log(cartItems, "?");

  const dispatch = useDispatch();

  const handlePlusCartQty = (idx, num, price) => {
    dispatch(increaseQty({ idx, num, price }));
  };

  const handleMinusCartQty = (idx, num, price) => {
    dispatch(decreaseQty({ idx, num, price }));
  };

  const handleCartRemove = (idx) => {
    dispatch(removeCartItems(idx));
  };

  let total = cartItems.reduce((acc, cur) => acc + cur.price, 0);
  console.log(total);

  return (
    <Box p="10">
      <Text fontSize="3xl" fontWeight="700">
        Shopping Cart
      </Text>
      <Grid
        templateColumns="repeat(4,1fr)"
        borderBottom="1px solid #000"
        py="2.5"
        mt="6"
        mb="3"
      >
        <GridItem fontSize="2xl" textAlign="center">
          Product
        </GridItem>
        <GridItem fontSize="2xl" textAlign="center">
          Space
        </GridItem>
        <GridItem fontSize="2xl" textAlign="center">
          Quantity
        </GridItem>
        <GridItem fontSize="2xl" textAlign="center">
          Price
        </GridItem>
      </Grid>

      <Box overflow="scroll" h="500px">
        {cartItems?.map((cartItem) => (
          <Grid templateColumns="1fr 1fr 1fr 1fr" key={cartItem?.idx} mb="10">
            <Box
              display="flex"
              flexDirection="column"
              gap="2"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src={cartItem?.mainImage}
                alt={cartItem?.mainImage}
                objectFit="contain"
                width="100px"
                height="100px"
              />
              <Box>
                <Text fontSize="lg" fontWeight="600" color="gray.600">
                  {cartItem?.name}
                </Text>
              </Box>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              justifyContent="center"
            >
              <Text fontSize="3xl">{cartItem?.spaceCategory}</Text>
              <Text fontSize="lg">{cartItem?.registrationDate}</Text>
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box display="flex" gap="3" alignItems="center">
                <Button
                  onClick={() =>
                    handleMinusCartQty(
                      cartItem?.idx,
                      1,
                      travelData.find((t) => t.idx === cartItem.idx).price
                    )
                  }
                  isDisabled={cartItem.qty === 1 && true}
                >
                  -
                </Button>
                <Text fontSize="lg">{cartItem?.qty || 1}</Text>
                <Button
                  onClick={() =>
                    handlePlusCartQty(
                      cartItem?.idx,
                      1,
                      travelData.find((t) => t.idx === cartItem.idx).price
                    )
                  }
                  isDisabled={
                    cartItem.qty === cartItem?.maximumPurchases && true
                  }
                >
                  +
                </Button>
              </Box>
              <Text fontSize="lg" mt="2">
                최대 주문 개수 : {cartItem?.maximumPurchases}
              </Text>
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="3"
            >
              <Text fontSize="2xl">
                총액: {formattedNumber(cartItem?.price)}
              </Text>
              <Tooltip
                label="이 상품을 취소하시려면 클릭하세요!"
                bg="red.400"
                placement="bottom"
                p="2"
              >
                <Button
                  onClick={() => handleCartRemove(cartItem?.idx)}
                  w="32%"
                  background="transparent"
                  color="red.500"
                  fontSize="2xl"
                >
                  x
                </Button>
              </Tooltip>
            </Box>
          </Grid>
        ))}
      </Box>
      <Grid templateColumns="1fr 3fr" p="20">
        <GridItem>
          <Link to="/main">
            <Tooltip
              hasArrow
              label="뒤로 가기"
              placement="top-start"
              bg="green.400"
              p="3"
            >
              <Text
                fontSize="2xl"
                fontWeight="bold"
                display="flex"
                alignItems="center"
              >
                <Image
                  src={arrow}
                  objectFit="contain"
                  width="50px"
                  height="50px"
                />
                Continue Shopping
              </Text>
            </Tooltip>
          </Link>
        </GridItem>
        <GridItem display="flex" justifyContent="flex-end">
          <Text fontSize="3xl">Total: {formattedNumber(total)}원</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Reservations;
