import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        dashgo
       <Text as="span" ml="1" color="pink.500">.</Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: "gray.400" }}
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex
        align="center"
        ml="auto"

      >
        <HStack 
        spacing="8"
        mx="8"
        pr="8"
        py="1"
        color="gray.300"
        borderRight={1}
        borderColor="gray.700"
        >

          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex
        align="center">
          <Box mr="4" textAlign="right">
          <Text>Marcos Moura</Text>
          <Text color="gray.300" fontSize="small">marcos_moura@live.com</Text>
          </Box>

          <Avatar size="md" name="Marcos Moura" src="https://scontent-for1-1.xx.fbcdn.net/v/t1.6435-9/143379819_2363215550491146_6452058497307237849_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=0gobnALyI8gAX_on2b_&_nc_ht=scontent-for1-1.xx&oh=8be9dd5f3d7d752c307c61557b5bb95c&oe=6097B7EF"/>

        </Flex>
      </Flex>
    </Flex>
  );
}