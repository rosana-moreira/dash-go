import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Rosana Moreira</Text>
          <Text color="gray.300" fontSize="small">
            rosana.moreira@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Rosana Moreira" />
    </Flex>
  );
}
