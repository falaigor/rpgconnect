import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import badrunImg from "public/badrun.png";

export const Hero = () => {
  return (
    <VStack>
      <Box>
        <Container maxW="container.xl" padding={8}>
          <Grid templateColumns="repeat(2, 1fr)" gap={30} alignItems="center">
            <Flex
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="space-between"
              height={250}
            >
              <Heading size="3xl">
                A rede social de <strong>quem curte RPG</strong>.
              </Heading>
              <Text>
                Pra você que é mestre, jogador ou organizador de eventos de RPG.
                Crie ou encontre mesas, conecte-se com novas pessoas.
              </Text>
              <Button
                borderRadius={20}
                fontWeight="400"
                bg="purple.100"
                _hover={{ bg: "purple.300" }}
              >
                Entrar
              </Button>
            </Flex>
            <Flex alignItems="center" justifyContent="center">
              <div>
                <Image src={badrunImg} alt="Picture of the author" />
              </div>
            </Flex>
          </Grid>
        </Container>
      </Box>
    </VStack>
  );
};
