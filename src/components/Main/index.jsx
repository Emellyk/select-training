import {
  AspectRatio,
  Container,
  Text,
  Image,
  SimpleGrid,
  Card,
  CardBody,
  Box
} from '@chakra-ui/react'

export function Main() {
  return (
    <>
      <AspectRatio maxH="562px">
        <iframe title="video select" src="video2.mp4" allowFullScreen />
      </AspectRatio>

      {/** Necessário fazer a configuração correta colocar vídeo
        ocupando a tela inteira porem com height de 562px, e fazer
        ele ficar atrás conforme rolagem da página.
        Reprodução automática, ocultar barra de play.
        E colocar 2 componentes de texto sobre o vídeo */}

      <Container maxW="1024px" pt="24">
        <Text
          bgGradient="linear(to-tr, #EB4561, #FFEB40)"
          bgClip="text"
          fontSize="4xl"
          fontWeight="bold"
          align="center"
        >
          O ensino pensado para todas as fases de sua vida
        </Text>
        <Text fontSize="xl" fontWeight="light" align="center" pt="5">
          Com profissionais qualificados para transmitir o conhecimento com a{' '}
          <br />
          linguagem correta para cada faixa etária.
        </Text>

        <SimpleGrid
          pt="20"
          pb="20"
          gap="16"
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        >
          <Card bg="transparent">
            <Image objectFit="cover" src="criancas.svg" borderRadius="lg" />
            <CardBody>
              <Text
                align="center"
                bgGradient="linear(to-tr, #EB4561, #FFEB40)"
                bgClip="text"
                fontSize="xl"
                fontWeight="bold"
              >
                CRIANÇAS
              </Text>
              <Text align="center">
                Linguagem adequada para a idade, de forma lúdica e divertida
                para aprenderem a forma correta e segura a manusear o computador
              </Text>
            </CardBody>
          </Card>
          <Card bg="transparent">
            <Image objectFit="cover" src="jovens.svg" borderRadius="lg" />
            <CardBody>
              <Text
                align="center"
                bgGradient="linear(to-tr, #EB4561, #FFEB40)"
                bgClip="text"
                fontSize="xl"
                fontWeight="bold"
              >
                JOVENS
              </Text>
              <Text align="center">
                Com linguagem específica para esse momento, abordagem das
                melhores formas para ingressarem ao mercado de trabalho
              </Text>
            </CardBody>
          </Card>
          <Card bg="transparent">
            <Image objectFit="cover" src="adultos.svg" borderRadius="lg" />
            <CardBody>
              <Text
                align="center"
                bgGradient="linear(to-tr, #EB4561, #FFEB40)"
                bgClip="text"
                fontSize="xl"
                fontWeight="bold"
              >
                ADULTOS
              </Text>
              <Text align="center">
                Aprender no seu tempo, com atividades práticas e aulas extras
                para a fixação do conteúdo.
              </Text>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Container>

      <Box w="full" h='52vh' backgroundImage="planos2.svg" backgroundSize="cover"/>
    </>
  )
}
