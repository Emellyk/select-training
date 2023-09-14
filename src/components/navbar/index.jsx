import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Image
} from '@chakra-ui/react'

export function Navbar() {
  return (
    <Flex
      pos="fixed"
      p="2"
      align="center"
      w="1924px"
      justifyContent="space-between"
    >
      <Image src="logo.svg" alt="Logomarca Select" maxW="173" />
      <Breadcrumb separator=" " fontSize="xl" color="white" ml="64">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Sobre a Escola</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Para todas as Idades</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Planos de Carreira</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">EJA</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Image pr="8" src="contato.svg" />
    </Flex>
  )
}
