import {
  Image,
  Flex,
  Text,
  Box,
  SimpleGrid,
  Card,
  CardBody,
  Container,
  Heading
} from '@chakra-ui/react'

export function Header() {
  return (
    <>
      <Flex pos="absolute" zIndex={-1} right="0">
        <Flex direction={'column'}>
          <Box
            pt="224"
            pl="5 "
            fontWeight="bold"
            fontSize="6xl"
            color="#001F55"
          >
            CONSTRUA <br />
            SUA HISTÓRIA
          </Box>
          <Box pl="5 " fontWeight="bold" fontSize="6xl" color="#F37A02">
            FAÇA SELECT
          </Box>
          <Box pt="46" pl="5" fontWeight="light" fontSize="2xl" color="#001F55">
            As pessoas de sucesso passam por aqui!
          </Box>
          <Box pl="5" fontWeight="light" fontSize="2xl" color="#001F55">
            28 anos transformando vidas.
          </Box>
        </Flex>
        <Image src="banner.svg" alt="Banner hero" />
      </Flex>

      <Container maxW="1024px" pt="32" pb="20">
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
                CERTIFICAÇÃO
              </Text>
              <Text align="center">Certificação reconhecida nível Brasil</Text>
            </CardBody>
          </Card>
          <Card bg="transparent">
            <Image objectFit="cover" src="premios.svg" borderRadius="lg" />
            <CardBody>
              <Text align="center" color="orange" fontWeight="bold">
                28 ANOS
              </Text>
              <Text align="center">Desde 1994 fazendo história.</Text>
            </CardBody>
          </Card>
        </SimpleGrid>

        <SimpleGrid pt="28">
          <Flex>
            <Image src="fachada.svg" width="470px" />
            <Box pl="12">
              <Heading fontSize="36" color="#F37A02">
                SELECT TRAINING
              </Heading>
              <Text pt="5" color="#001F55">
                Há mais de 10 anos a Select Training é escolhida como a melhor
                escola de treinamentos e cursos de informática em Sinop, com
                certificado reconhecido em todo território nacional.
              </Text>
            </Box>
          </Flex>
        </SimpleGrid>

        <SimpleGrid pt="24">
          <Flex>
            <Box pr="12" align="end">
              <Heading fontSize="36" color="#F37A02">
                COLÉGIO SELECT
              </Heading>
              <Text pt="5" color="#001F55">
                Sistema de Ensino EJA. Com a conclusão do Ensino fundamental e o
                Ensino Médio você já estará com as portas abertas o mercado de
                trabalho.
              </Text>
            </Box>
            <Image src="fachada.svg" width="470px" />
          </Flex>
        </SimpleGrid>
      </Container>
    </>
  )
}
