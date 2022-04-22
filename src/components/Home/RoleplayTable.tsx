import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { RoleplayTableItem } from "./RoleplayTableItem";

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
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              null,
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap={30}
            alignItems="center"
          >
            <RoleplayTableItem />
            <RoleplayTableItem />
            <RoleplayTableItem />
            <RoleplayTableItem />
            <RoleplayTableItem />
            <RoleplayTableItem />
          </Grid>
        </Container>
      </Box>
    </VStack>
  );
};
