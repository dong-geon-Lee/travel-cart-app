import React, { useEffect } from "react";
import MainItems from "../../components/MainItems/MainItems";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../constants/constants";
import { fetchTravelData } from "../../redux-toolkit/productSlice";
import { Box } from "@chakra-ui/react";

const Main = () => {
  const travelData = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const getDatas = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      dispatch(fetchTravelData(data));
    };
    getDatas();
  }, []);

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap="2rem"
      my="5%"
    >
      {travelData.map((items) => (
        <MainItems key={items.idx} items={items} />
      ))}
    </Box>
  );
};

export default Main;
