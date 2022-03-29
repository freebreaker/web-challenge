import React, { FC } from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

export const NoneFound: FC = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text">
        Sorry
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        No Transactions Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        The tx you're looking for does not seem to exist
      </Text>
{/* 
      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid">
        Create a Transaction
      </Button> */}
    </Box>
  );
}