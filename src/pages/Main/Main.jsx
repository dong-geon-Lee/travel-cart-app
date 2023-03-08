import React, { useEffect } from "react";
import MainItems from "../../components/MainItems/MainItems";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../constants/constants";
import { fetchTravelData, resetValue } from "../../redux-toolkit/productSlice";
import { Box } from "@chakra-ui/react";

const Main = () => {
  const { products, sortedProducts, price, regions } = useSelector(
    (state) => state.product
  );
  const items = sortedProducts.length === 0 ? products : sortedProducts;
  const dispatch = useDispatch();

  useEffect(() => {
    const getDatas = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      dispatch(fetchTravelData(data));
    };
    getDatas();
  }, []);

  useEffect(() => {
    if (price !== "all" && regions !== "all") {
      alert("존재하지 않는 상품입니다.");
      dispatch(resetValue());
    }
  }, [sortedProducts.length === 0]);

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap="2rem"
    >
      {items?.map((items) => (
        <MainItems key={items.idx} items={items} />
      ))}
    </Box>
  );
};

export default Main;
