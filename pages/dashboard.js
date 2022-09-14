import { Box, Heading, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Web3Context } from "../context/Web3Context";
import React from "react";
import Card from "../components/Card";

const Dashboard = () => {
  const [campaigns, setCampaign] = useState();
  const { account, fetchCampaigns, connectWallet } = useContext(Web3Context);
  useEffect(() => {
    if (!account) return;
    fetchCampaigns().then((item) => setCampaign(item));
    console.log(campaigns);
  }, [account]);

  return (
    <Box
      pt={100}
      maxW={"7xl"}
      display={"flex"}
      gap={4}
      mx="auto"
      justifyContent={"center"}
      alignItems={"center"}
      flexDir="column"
    >
      <Text fontSize={"lg"} fontStyle="mono" fontWeight={500} mb={10}>
        My Campaigns
      </Text>
      <Box
        w="full"
        display={"flex"}
        gap={4}
        flexWrap={"wrap"}
        mx="auto"
        justifyContent={"center"}
        alignItems={"center"}
      >
        {campaigns ? (
          campaigns
            .filter((c) => c.creator.includes(account) && c.campstate == "0x00")
            .map((c, i) => {
              return <Card key={i} c={c} t={"dashboard"} />;
            })
        ) : (
          <Text>No campaign found </Text>
        )}
      </Box>{" "}
    </Box>
  );
};

export default Dashboard;
