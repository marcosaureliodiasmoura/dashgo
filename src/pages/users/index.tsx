import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Td, Text, Checkbox, Tbody, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius="8" bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">


            <Heading size="lg" fontWeight="normal">Usuários</Heading>


            <Link href="/users/create" passHref>
              <Button as="a"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                size="sm" fontSize="sm" colorScheme="pink">Criar novo</Button>
            </Link>

          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de usuário</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Marcos Moura</Text>
                    <Text fontSize="sm" color="gray.300">marcos_moura@live.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>12 de abril, 2021</Td>}
                <Td>
                  {/* <Button as="a"
                    leftIcon={<Icon as={RiPencilLine} fontSize="20"/>}
                    size="sm" fontSize="sm" colorScheme="purple">{isWideVersion ? 'Editar': ''}</Button> */}
                </Td>
              </Tr>
            </Tbody>

            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Marcos Moura</Text>
                    <Text fontSize="sm" color="gray.300">marcos_moura@live.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>12 de abril, 2021</Td>}
                <Td>
                  {/* <Button as="a"
                    leftIcon={<Icon as={RiPencilLine} fontSize="20"/>}
                    size="sm" fontSize="sm" colorScheme="purple">{isWideVersion }</Button> */}
                </Td>
              </Tr>
            </Tbody>

            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Marcos Moura</Text>
                    <Text fontSize="sm" color="gray.300">marcos_moura@live.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>12 de abril, 2021</Td>}
                <Td>
                  {/* <Button as="a"
                    leftIcon={<Icon as={RiPencilLine} fontSize="20"/>}
                    size="sm" fontSize="sm" colorScheme="purple">{isWideVersion }</Button> */}
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}