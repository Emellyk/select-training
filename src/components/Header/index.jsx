import {
  Image,
  Flex,
  Text,
  Box,
  SimpleGrid,
  Card,
  CardBody,
  Container
} from '@chakra-ui/react'

export function Header() {
  return (
    <>
      <Flex pos="absolute" zIndex={-1} right="0">
        <Flex direction={'column'}>
          <Box
            textStyle="h1"
            pt="224"
            pl="5 "
            fontWeight="bold"
            fontSize="6xl"
            color="blue.900"
          >
            CONSTRUA <br />
            SUA HISTÓRIA
          </Box>
          <Box
            textStyle="h1"
            pl="5 "
            fontWeight="bold"
            fontSize="6xl"
            color="orange"
          >
            FAÇA SELECT
          </Box>
          <Box
            textStyle="h1"
            pt="46"
            pl="5 "
            fontWeight="light"
            fontSize="2xl"
            color="blue.900"
          >
            As pessoas de sucesso passam por aqui!
          </Box>
          <Box
            textStyle="h1"
            pl="5 "
            fontWeight="light"
            fontSize="2xl"
            color="blue.900"
          >
            28 anos trasnformando vidas.
          </Box>
        </Flex>
        <Image src="banner.svg" alt="Banner hero" />
      </Flex>

      /** Cards */
      <Container maxW="1024px" pt="32">
        <SimpleGrid
          pt="600"
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          <Card bg="transparent">
            <Image objectFit="cover" src="premios.svg" borderRadius="lg" />
            <CardBody>
              <Text align="center" color="orange" fontWeight="bold">
                PREMIAÇÕES
              </Text>
              <Text align="center">Premiada a nível Nacional</Text>
            </CardBody>
          </Card>
          <Card bg="transparent">
            <Image
              objectFit="cover"
              src="profissionais.svg"
              borderRadius="lg"
            />
            <CardBody>
              <Text align="center" color="orange" fontWeight="bold">
                PROFISSIONAIS
              </Text>
              <Text align="center">Profissionais Qualificados</Text>
            </CardBody>
          </Card>
          <Card bg="transparent">
            <Image objectFit="cover" src="premios.svg" borderRadius="lg" />
            <CardBody>
              <Text align="center" color="orange" fontWeight="bold">
                PREMIAÇÕES
              </Text>
              <Text align="center">Premiada a nível Nacional</Text>
            </CardBody>
          </Card>
          <Card bg="transparent">
            <Image objectFit="cover" src="premios.svg" borderRadius="lg" />
            <CardBody>
              <Text align="center" color="orange" fontWeight="bold">
                PREMIAÇÕES
              </Text>
              <Text align="center">Premiada a nível Nacional</Text>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Container>
    </>
  )
}
