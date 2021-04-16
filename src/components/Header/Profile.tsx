import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps{
  showProfileData?: boolean;
}


export function Profile({showProfileData = true}: ProfileProps) {
  return (
    <Flex
      align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
        <Text>Marcos Moura</Text>
        <Text color="gray.300" fontSize="small">marcos_moura@live.com</Text>
      </Box>
      )}

      <Avatar size="md" name="Marcos Moura" src="https://scontent-for1-1.xx.fbcdn.net/v/t1.6435-9/143379819_2363215550491146_6452058497307237849_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=0gobnALyI8gAX_on2b_&_nc_ht=scontent-for1-1.xx&oh=8be9dd5f3d7d752c307c61557b5bb95c&oe=6097B7EF" />

    </Flex>
  )
}