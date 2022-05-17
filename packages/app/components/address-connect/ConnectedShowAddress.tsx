import React, { useState } from 'react';
import {
  Box,
  Text,
  Center,
  useColorModeValue,
  Flex,
  Button,
  Icon,
  Link,
  Checkbox,
  useClipboard,
} from '@chakra-ui/react';
import { FaRegCopy } from 'react-icons/fa';
import { IoWallet } from 'react-icons/io5';
import { FiExternalLink } from 'react-icons/fi';

interface CardProps {
  address: string;
  showLink: boolean;
  hasCopied: boolean;
  onCopy: (value: string) => void;
}

export const Card = ({ address, showLink, hasCopied, onCopy }: CardProps) => {
  return (
    <Center>
      <Box
        borderRadius="xl"
        boxShadow="inner"
        bg={useColorModeValue('gray.50', 'blackAlpha.300')}
        p={4}
      >
        <Flex
          justify="space-between"
          align="center"
          px={{ base: 2, sm: 3 }}
          mb={2}
        >
          <Flex flexGrow={1} align="center">
            <Icon as={IoWallet} mr={2} />
            <Text
              fontSize={{ base: 'lg', sm: 'xl', md: 'xl' }}
              fontWeight="semibold"
            >
              webg3
            </Text>
          </Flex>
          {showLink && (
            <Link href="#" isExternal>
              <Icon as={FiExternalLink} mx={1} />
            </Link>
          )}
        </Flex>
        <Button
          borderRadius="full"
          boxShadow="base"
          bg={useColorModeValue('whiteAlpha.900', 'blackAlpha.900')}
          px={{ base: 3, md: 4 }}
          py={1}
          onClick={() => onCopy(address)}
          isDisabled={hasCopied}
          rightIcon={<FaRegCopy />}
        >
          <Text
            maxW={{ base: '2xs', sm: 'md', md: 'lg' }}
            position="relative"
            fontSize={{ base: 'sm', md: 'md' }}
            fontWeight="normal"
            letterSpacing="0.4px"
            title={address}
            height="1.25em"
            whiteSpace="break-spaces"
            overflow="hidden"
            _before={{
              content: 'attr(title)',
              width: { base: '50%', sm: 0 },
              float: 'right',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              direction: 'rtl',
            }}
            _hover={{
              cursor: 'inherit',
            }}
          >
            {address}
          </Text>
        </Button>
      </Box>
    </Center>
  );
};

interface WalletProps {
  showLink: boolean;
  address: string;
};

export const Wallet = ({ showLink = false, address = "address not identified yet" }: WalletProps) => {
  const { hasCopied, onCopy } = useClipboard(address);
  return (
    <Card address={address} showLink={showLink} onCopy={onCopy} hasCopied={hasCopied} />
  );
};

export default Wallet;