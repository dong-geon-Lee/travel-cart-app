import React, { useEffect } from "react";
import cart from "../../assets/cart.svg";
import { Box, Button, Image, Select, Tooltip } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  priceValue,
  regionsValue,
  updateTravelData,
} from "../../redux-toolkit/productSlice";

const Header = () => {
  const { products, price, regions } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const handlePriceOnChange = (e) => {
    dispatch(priceValue(e.target.value));
  };

  const handleRegionOnChange = (e) => {
    dispatch(regionsValue(e.target.value));
  };

  useEffect(() => {
    dispatch(updateTravelData(products));
  }, [price, regions]);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      py="10"
      px="5"
      bg="beige"
    >
      <Box display="flex" alignItems="center" gap="4">
        <Tooltip hasArrow label="가격을 선택해 주세요" bg="green.400" p="3">
          <Select
            value={price}
            onChange={handlePriceOnChange}
            bgGradient="linear(to-l, #fffeff, #bdc2d7)"
            border="1px solid #000"
            cursor="pointer"
          >
            <option value="all">전체</option>
            <option value="lowPrice">0원 초과 ~ 10000원 이하</option>
            <option value="middlePrice">10000원 초과 ~ 15000 이하</option>
            <option value="highPrice">15000원 초과 ~ 30000원 이하</option>
          </Select>
        </Tooltip>
        <Tooltip hasArrow label="공간을 선택해 주세요" bg="green.400" p="3">
          <Select
            value={regions}
            onChange={handleRegionOnChange}
            bgGradient="linear(to-l, #fffeff, #bdc2d7)"
            border="1px solid #000"
            cursor="pointer"
          >
            <option value="all">전체</option>
            <option value="서울" name="seoul">
              서울
            </option>
            <option value="대구" name="daegu">
              대구
            </option>
            <option value="강원" name="Gangwon">
              강원
            </option>
            <option value="제주" name="Jeju">
              제주
            </option>
            <option value="부산" name="busan">
              부산
            </option>
          </Select>
        </Tooltip>
      </Box>
      <Link to="/reservations" style={{ marginRight: "2rem" }}>
        <Tooltip hasArrow label="장바구니" bg="green.400" p="3">
          <Button
            backgroundColor="transparent"
            variant="solid"
            colorScheme="white"
          >
            <Image src={cart} alt="cart" w="10" h="10" />
          </Button>
        </Tooltip>
      </Link>
    </Box>
  );
};

export default Header;
