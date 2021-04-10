import { Flex, Input, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form" //Atribui isso aqui a uma tag form do html
        w="100%" //largura
        maxWidth={360} //360pxs
        bg="gray.800"
        p="8" //padding 2rem ou 32px
        borderRadius={8} //pxls
        flexDirection="column"
      >

        <Stack spacing="4" //Stack: efeito pilha, todos os elementos recebem o efeito, 
                            //se tiver <div> aplica na div e não o que 
                            // está dentro dela ou FormControl do chakra.
        >
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              name="email"
              type="email"
              id="email"
              focusBorderColor="pink.500" //props do chakra -> cor da bordar ao passar o focus
              bgColor="gray.900"
              variant="filled" //props do chrakra no input
              _hover={{
                bgColor: 'gray-900'
              }}
              size="lg" //props do chakra, tamanho do input, lg (larger)
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              name="password"
              type="passowrd"
              id="password"
              focusBorderColor="pink.500" //props do chakra -> cor da bordar ao passar o focus
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray-900'
              }}
              size="lg" //props do chakra, tamanho do input, lg (larger)
            />
          </FormControl>


        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">Entrar</Button>
      </Flex>
    </Flex>
  )
}