import { Text } from '@chakra-ui/react'


export function Logo() {
  return (
    <Text fontSize={["2xl", "3xl"]} //2xl para mobile e 3xl pro restante das resoluções
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      person
      <Text as="span" ml="1" color="pink.500">.</Text>
    </Text>
  )
}