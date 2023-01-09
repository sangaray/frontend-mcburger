import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("rgba(251, 151, 0, 1)")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string,
  name: string,
  title: string,
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} size="xl" alt={name} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading color={useColorModeValue("rgba(251, 151, 0, 1)")}>
            People think of Mc Burger
          </Heading>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Authentic flavors</TestimonialHeading>
              <TestimonialText>
                The flavors are authentic, from the burgers, coffee, desserts. I
                recommend it to everyone.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"https://bit.ly/dan-abramov"}
              name={"Dan Abrahmov"}
              title={"Rosario, Santa Fe"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                Ideal to come with the whole family
              </TestimonialHeading>
              <TestimonialText>
                The prices are accessible, the flavor is delicious, it is an
                excellent family weekend plan.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"https://bit.ly/chakra-maya-shavin"}
              name={"Maya Shavin"}
              title={"Victoria, Entre Rios"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                The attention is always very warm
              </TestimonialHeading>
              <TestimonialText>
                It is very important for the client that the person who attends
                them is friendly, understanding and generates a good atmosphere.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"https://bit.ly/ryan-florence"}
              name={"Ryan Florence"}
              title={"Santa Rosa de Calamuchita, Córdoba"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
