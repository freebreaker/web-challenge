import React from "react";
import { Box, Heading, Divider, useColorModeValue } from "@chakra-ui/react";

export default function LiquidityBootstrap() {
  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={4}>
        Liquidity Bootstrap
      </Heading>
      <Divider
        borderColor={useColorModeValue("blackAlpha.400", "whiteAlpha.500")}
      />
    </Box>
  );
}
