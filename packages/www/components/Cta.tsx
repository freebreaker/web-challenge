import React from "react";
import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    Stack,
    Link,
} from "@chakra-ui/react";

export default function Sj() {
    return (
        <Flex
            // bg={useColorModeValue("#F9FAFB", "gray.600")}
            p={50}
            w="full"
            alignItems="center"
            justifyContent="center"
        >
            <Box
            //  bg={useColorModeValue("gray.50", "gray.800")}
            >
                <Box
                    maxW="7xl"
                    w={{ md: "3xl", lg: "4xl" }}
                    mx="auto"
                    py={{ base: 12, lg: 16 }}
                    px={{ base: 4, lg: 8 }}
                    display={{ lg: "flex" }}
                    alignItems={{ lg: "center" }}
                    justifyContent={{ lg: "space-between" }}
                >
                    <chakra.h2
                        fontSize={{ base: "3xl", sm: "4xl" }}
                        fontWeight="extrabold"
                        letterSpacing="tight"
                        lineHeight="shorter"
                        color={useColorModeValue("gray.900", "gray.100")}
                    >
                        <chakra.span display="block">Ready to dive in?</chakra.span>
                        <chakra.span
                            display="block"
                            color={useColorModeValue("purple.400", "gray.500")}
                        >
                            Try our app today
                        </chakra.span>
                    </chakra.h2>
                    <Stack
                        direction={{ base: "column", sm: "row" }}
                        mt={{ base: 8, lg: 0 }}
                        shrink={{ lg: 0 }}
                    >
                        <Link
                            w={["full", , "auto"]}
                            display="inline-flex"
                            alignItems="center"
                            justifyContent="center"
                            px={5}
                            py={3}
                            border="solid transparent"
                            fontWeight="bold"
                            rounded="md"
                            shadow="md"
                            href="https://app.cosmology.finance"
                            href="https://www.npmjs.com/package/cosmology"
                            target="_target"
                            color={useColorModeValue("white")}
                            bg={useColorModeValue("purple.400", "purple.500")}
                            _hover={{
                                bg: useColorModeValue("purple.500", "purple.600"),
                            }}
                        >
                            Use Cosmology
                        </Link>
                        {/* <Link
                            w={["full", , "auto"]}
                            display="inline-flex"
                            alignItems="center"
                            justifyContent="center"
                            px={5}
                            py={3}
                            border="solid transparent"
                            fontWeight="bold"
                            rounded="md"
                            shadow="md"
                            color="purple.600"
                            bg="white"
                            _hover={{
                                bg: "purple.50",
                            }}
                        >
                            Learn More
                        </Link> */}
                    </Stack>
                </Box>
            </Box>
        </Flex>
    );
}