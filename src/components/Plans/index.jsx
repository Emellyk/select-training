import {
  Box,
  Flex,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  ListIcon,
  Button
} from '@chakra-ui/react'

export function Planos() {
  return (
    <>
      <Box py={12}>
        <VStack spacing={2} textAlign="center">
          <Heading as="h1" fontSize="4xl">
            Escolha o melhor plano para você
          </Heading>
          <Flex gap={10}>
            <Stack
              textAlign="center"
              justify="center"
              spacing={{ base: 4, lg: 10 }}
              py={10}
            >
              <Box py={4} px={12}>
                <Text color="#F37A02" fontWeight="700" fontSize="4xl">
                  PLANO 01
                </Text>
                <HStack justifyContent="center">
                  <Text color="#001F55" fontSize="xl" fontWeight="900" pt={5}>
                    Operador de Computador +<br /> Designer Gráfico Profissional
                  </Text>
                </HStack>
              </Box>
              <VStack bg="gray.50" py={4} borderBottomRadius={'xl'}>
                <List spacing={3} textAlign="start" px={5}>
                  <ListItem>
                    <ListIcon />
                    Domine os principais programas do computador e <br />
                    aprenda a magia do mundo gráfico
                  </ListItem>
                  <ListItem>
                    <ListIcon />
                    Programas Operador: Windows, Pacote Office e Internet
                  </ListItem>
                  <ListItem>
                    <ListIcon />
                    Programas Designer: CorelDRAW, Photoshop, Illustrator,{' '}
                    <br /> Indesign, Animate e Vegas
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <Button w="full">Escolher Plano</Button>
                </Box>
              </VStack>
            </Stack>


            <Stack
              textAlign="center"
              justify="center"
              spacing={{ base: 4, lg: 10 }}
              py={10}
            >
              <Box py={4} px={12}>
                <Text color="#F37A02" fontWeight="700" fontSize="4xl">
                  PLANO 02
                </Text>
                <HStack justifyContent="center">
                  <Text color="#001F55" fontSize="xl" fontWeight="900" pt={5}>
                    Operador de Computador +<br /> Manutenção de comp. e Notebooks
                  </Text>
                </HStack>
              </Box>
              <VStack bg="gray.50" py={4} borderBottomRadius={'xl'}>
                <List spacing={3} textAlign="start" px={5}>
                  <ListItem>
                    <ListIcon />
                    Fique expert em computação e aprenda a fazer <br/>manutenção em programas, computadores e notebooks.
                  </ListItem>
                  <ListItem>
                    <ListIcon />
                    Programas Operador: Windows, Pacote Office e Internet
                  </ListItem>
                  <ListItem>
                    <ListIcon />
                    Programas Manutenção: Formatação de Computadores, Configurações <br/>de programas e Sistemas Operacionais
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <Button w="full">Escolher Plano</Button>
                </Box>
              </VStack>
            </Stack>

            <Stack
              textAlign="center"
              justify="center"
              spacing={{ base: 4, lg: 10 }}
              py={10}
            >
              <Box py={4} px={12}>
                <Text color="#F37A02" fontWeight="700" fontSize="4xl">
                  PLANO 01
                </Text>
                <HStack justifyContent="center">
                  <Text color="#001F55" fontSize="xl" fontWeight="900" pt={5}>
                    Operador de Computador +<br /> Designer Gráfico Profissional
                  </Text>
                </HStack>
              </Box>
              <VStack bg="gray.50" py={4} borderBottomRadius={'xl'}>
                <List spacing={3} textAlign="start" px={5}>
                  <ListItem>
                    <ListIcon />
                    Domine os principais programas do computador e <br />
                    aprenda a magia do mundo gráfico
                  </ListItem>
                  <ListItem>
                    <ListIcon />
                    Programas Operador: Windows, Pacote Office e Internet
                  </ListItem>
                  <ListItem>
                    <ListIcon />
                    Programas Designer: CorelDRAW, Photoshop, Illustrator,{' '}
                    <br /> Indesign, Animate e Vegas
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <Button w="full">Escolher Plano</Button>
                </Box>
              </VStack>
            </Stack>

            <Stack
              textAlign="center"
              justify="center"
              spacing={{ base: 4, lg: 10 }}
              py={10}
            >
              <Box py={4} px={12}>
                <Text color="#F37A02" fontWeight="700" fontSize="4xl">
                  PLANO 01
                </Text>
                <HStack justifyContent="center">
                  <Text color="#001F55" fontSize="xl" fontWeight="900" pt={5}>
                    Operador de Computador +<br /> Designer Gráfico Profissional
                  </Text>
                </HStack>
              </Box>
              <VStack bg="gray.50" py={4} borderBottomRadius={'xl'}>
                <List spacing={3} textAlign="start" px={5}>
                  <ListItem>
                    <ListIcon />
                    Domine os principais programas do computador e <br />
                    aprenda a magia do mundo gráfico
                  </ListItem>
                  <ListItem>
                    <ListIcon />
                    Programas Operador: Windows, Pacote Office e Internet
                  </ListItem>
                  <ListItem>
                    <ListIcon />
                    Programas Designer: CorelDRAW, Photoshop, Illustrator,{' '}
                    <br /> Indesign, Animate e Vegas
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <Button w="full">Escolher Plano</Button>
                </Box>
              </VStack>
            </Stack>
          </Flex>
        </VStack>
      </Box>
    </>
  )
}
