import { Button, Container, Flex, Link } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../../public/logo.svg";

export const Header = () => {
  return (
    <header>
      <Container maxW="container.xl" padding={8}>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          margin="0 auto"
        >
          <div>
            <Image src={logo} alt="Octagono" />
          </div>
          <nav>
            <Flex>
              <Link margin={4}>Home</Link>
              <Link margin={4}>About</Link>
              <Link margin={4}>Features</Link>
            </Flex>
          </nav>
          <Flex>
            <Button
              borderRadius={20}
              fontWeight="400"
              bg="purple.100"
              _hover={{ bg: "purple.300" }}
            >
              Entrar
            </Button>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
};
