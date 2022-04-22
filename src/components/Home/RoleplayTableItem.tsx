import { Grid, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FiUsers } from "react-icons/fi";
import { Tag } from "@components/Tag";

import imgCover from "public/cover.png";

export const RoleplayTableItem = () => {
  return (
    <Grid
      backgroundColor="#fff"
      padding={2}
      borderRadius={4}
      color="#222"
      minHeight={400}
    >
      <Flex flexDirection="column">
        <Image src={imgCover} alt="cover" />
        <Heading size="small" paddingY={1}>
          The Cursed of Stradh
        </Heading>
        <Text fontSize="14px">
          Pra você que é mestre, jogador ou organizador de eventos de RPG. Crie
          ou encontre mesas, conecte-se com novas pessoas.
        </Text>
      </Flex>

      <Flex alignItems="center">
        <Tag text="Campanha" />
        <Tag text="Dungeons & Dragons 5e" />
        <Tag text="Discord" />
      </Flex>

      <Flex alignItems="center">
        <FiUsers />
        <Text paddingX={2}>2 de 6 lugares ocupados</Text>
      </Flex>
    </Grid>
  );
};
