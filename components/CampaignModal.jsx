import truncateMiddle from "../utils/truncateMiddle.js";

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
  Text,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
  Progress,
  Box,
  Container,
  Icon,
  Link,
} from "@chakra-ui/react";
import { FaLink, FaVideo } from "react-icons/fa";
import { useContext, useState } from "react";
import { Web3Context } from "../context/Web3Context.js";
import { ethers } from "ethers";
const CampaignModal = ({ c }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { account, connectWallet, contribute } = useContext(Web3Context);
  const [amount, setAmount] = useState(0);
  const handleSubmit = async (e) => {
    e.preventDefault();
    contribute(c.campaignAddr, ethers.utils.parseEther(amount));
  };
  return (
    <>
      <Button mt={3} onClick={onOpen} colorScheme="blue" variant={"outline"}>
        Details
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} size={"full"}>
        <ModalOverlay />
        <ModalContent fontFamily="mono">
          <ModalHeader>{c.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              display={"flex"}
              w="100%"
              top={0}
              gap={4}
              flexDir={{ base: "column", lg: "row" }}
            >
              <Box display={"flex"} flex={3} flexDir={"column"} gap={4}>
                <Box>
                  <Image
                    src={`https://ipfs.io/ipfs/${c.cover}`}
                    objectFit={"contain"}
                    fit={"cover"}
                    align={"center"}
                    w={"100%"}
                    rounded={"lg"}
                    alt="cover"
                  />
                </Box>
                <Flex justifyContent={"space-between"} color={"gray.500"}>
                  <Text>
                    Created 4 days ago by{" "}
                    <Link
                      href={`https://mumbai.polygonscan.com/address/${c.creator}`}
                      isExternal
                    >
                      {truncateMiddle(c.creator)}
                    </Link>
                  </Text>
                </Flex>
                <Text fontSize={"xl"} fontWeight="bold" py={4}>
                  Story
                </Text>
                <Text>{c.desc}</Text>
                {c.imgs.map((img, i) => (
                  <Image
                    key={i}
                    alt={img}
                    src={`https://ipfs.io/ipfs/${c.imgcid}/${img}`}
                  />
                ))}
              </Box>
              <Container
                display={"flex"}
                flexDir="column"
                flex={1}
                boxShadow={"md"}
                p={4}
                rounded="md"
                height={"min-content"}
                pos="sticky"
                top={20}
              >
                <Box
                  gap={3}
                  display={"flex"}
                  flexDir="column"
                  justifyContent={"center"}
                  p={4}
                  pb={8}
                >
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Text fontWeight={700} fontSize={"md"}>
                      ◈{c.raised} raised&nbsp;
                    </Text>
                    <Text fontSize={"md"} fontWeight={700}>
                      ◈{c.target}
                    </Text>
                  </Box>
                  <Box w="90%" mx={"auto"} mb={4}>
                    <Progress
                      value={Number((c.raised * 100) / c.target)}
                      size="sm"
                      colorScheme="blue"
                      rounded={"lg"}
                    />
                  </Box>

                  <Flex gap={1} alignItems="center">
                    <Text>&nbsp;End on</Text>
                    <Text fontWeight={700}>{c.deadline}</Text>
                  </Flex>
                  {c.vid && (
                    <Flex gap={1} alignItems="center">
                      <Icon as={FaVideo} />
                      <Text fontWeight={700}>
                        &nbsp;
                        <Link href={c.vid} isExternal>
                          {c.vid}
                        </Link>
                      </Text>
                    </Flex>
                  )}
                  {c.website && (
                    <Flex gap={1} alignItems="center">
                      <Icon as={FaLink} />
                      <Text fontWeight={700}>
                        &nbsp;
                        <Link href={c.website} isExternal>
                          {c.website}
                        </Link>
                      </Text>
                    </Flex>
                  )}
                </Box>

                <InputGroup>
                  <InputLeftElement pointerEvents="none" fontSize="1.2em">
                    ◈
                  </InputLeftElement>

                  <Input
                    placeholder="Enter donation amount"
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </InputGroup>
                <Button
                  mt={2}
                  colorScheme={"blue"}
                  onClick={(e) => handleSubmit(e)}
                >
                  Donate Now 💪
                </Button>
              </Container>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CampaignModal;
