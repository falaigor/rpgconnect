import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

export const RoleplayTable = () => {
  return (
    <VStack backgroundColor="#291C52">
      <Box paddingTop="50px">
        <Flex
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          maxW="container.xl"
          padding={8}
        >
          <Heading size="2xl">Mesas abertas</Heading>
          <Text textAlign="center" maxWidth="450px" marginTop="20px">
            Pra você que é mestre, jogador ou organizador de eventos de RPG.
            Crie ou encontre mesas, conecte-se com novas pessoas.
          </Text>
        </Flex>
        <Container maxW="container.xl" padding={8}>
          <Grid templateColumns="repeat(3, 1fr)" gap={30} alignItems="center">
            <Flex
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="space-between"
            >
              <Heading>
                A rede social de <strong>quem curte RPG</strong>.
              </Heading>
              <Text>
                Pra você que é mestre, jogador ou organizador de eventos de RPG.
                Crie ou encontre mesas, conecte-se com novas pessoas.
              </Text>
            </Flex>
          </Grid>
        </Container>
      </Box>
    </VStack>
  );
};
