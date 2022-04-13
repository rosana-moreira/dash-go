import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Rosana Moreira</Text>
        <Text color="gray.300" fontSize="small">
          rosana.moreira@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Rosana Moreira" />
    </Flex>
  );
}
