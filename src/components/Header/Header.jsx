import React, { useEffect } from "react";
import cart from "../../assets/cart.svg";
import { Box, Button, Image, Select } from "@chakra-ui/react";
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
        <Select
          value={price}
          onChange={handlePriceOnChange}
          bgGradient="linear(to-l, #f95167, #edffa3)"
          border="1px solid #000"
          cursor="pointer"
        >
          <option value="all">전체</option>
          <option value="lowPrice">0원 초과 ~ 10000원 이하</option>
          <option value="middlePrice">10000원 초과 ~ 15000 이하</option>
          <option value="highPrice">15000원 초과 ~ 30000원 이하</option>
        </Select>
        <Select
          value={regions}
          onChange={handleRegionOnChange}
          bgGradient="linear(to-l, #f95167, #edffa3)"
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
      </Box>
      <Link to="/reservations" style={{ marginRight: "2rem" }}>
        <Button
          backgroundColor="transparent"
          variant="solid"
          colorScheme="white"
        >
          <Image src={cart} alt="cart" w="10" h="10" />
        </Button>
      </Link>
    </Box>
  );
};

export default Header;
