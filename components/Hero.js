import { Box, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Web3Context } from "../context/Web3Context";
import Card from "./Card";

export default function Hero() {
  const [campaigns, setCampaign] = useState();
  const { account, fetchCampaigns, connectWallet } = useContext(Web3Context);
  useEffect(() => {
    if (account) {
      fetchCampaigns().then((item) => setCampaign(item));
      console.log(campaigns);
    }
  }, [account]);

  return (
    <Box maxW={"7xl"} display={"flex"} gap={1} flexWrap={"wrap"} mx="auto">
      {campaigns ? (
        campaigns.map((c, i) => {
          return <Card key={i} c={c} t={"display"} />;
        })
      ) : (
        <Text>No campaign found </Text>
      )}
    </Box>
  );
}
