import React from "react";
import Modals from "../Modals/Modals";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addTravelToCart } from "../../redux-toolkit/productSlice";
import { Box } from "@chakra-ui/react";

const ProductItems = ({ items }) => {
  const { idx, name, mainImage, price, spaceCategory } = items;
  const dispatch = useDispatch();

  const handleReservations = () => {
    dispatch(addTravelToCart({ ...items }));
  };

  return (
    <Box>
      <div>
        <h1>{idx}</h1>
        <h1>{name}</h1>
        <img src={mainImage} alt={mainImage} />
        <h2>{price}</h2>
        <h2>{spaceCategory}</h2>
      </div>

      <div>
        <button onClick={() => handleReservations()}>예약하기</button>
        <Link state={items}>
          <Modals />
        </Link>
      </div>
    </Box>
  );
};

export default ProductItems;
