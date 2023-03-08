import React from "react";
import { useLocation } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  Image,
  Badge,
} from "@chakra-ui/react";

const Modals = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { state } = useLocation();
  const {
    idx,
    name,
    description,
    mainImage,
    spaceCategory,
    price,
    maximumPurchases,
    registrationDate,
  } = state;

  return (
    <>
      <Button onClick={onOpen}>자세히보기</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            #{idx} - {name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                src={mainImage}
                alt={name}
                w="100%"
                h="100%"
                objectFit="cover"
                display="block"
              />

              <Box p="6">
                <Box
                  mt="1"
                  mb="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                >
                  {name}
                  <Badge
                    borderRadius="full"
                    px="3"
                    py="0.5"
                    ml="2"
                    colorScheme="teal"
                    fontSize="sm"
                  >
                    {spaceCategory}
                  </Badge>
                </Box>
                <Box>
                  <Box as="p" color="gray.600" fontSize="sm" mb="0.5">
                    <strong>상품 안내</strong> : {price} 원 / 최대{" "}
                    {maximumPurchases} 개
                  </Box>
                  <Box as="p" color="gray.600" fontSize="sm" mb="0.5">
                    <strong>등록 날짜</strong> : {registrationDate}
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="left">
                  <Box
                    color="gray.600"
                    fontWeight="500"
                    letterSpacing="wide"
                    fontSize="sm"
                    textTransform="uppercase"
                    w="100%"
                  >
                    <strong>여행 정보</strong> : {description}
                  </Box>
                </Box>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Modals;
