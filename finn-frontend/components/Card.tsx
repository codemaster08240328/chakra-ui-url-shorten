import React from 'react';
import { Box, Image } from '@chakra-ui/react';

export type TCardComponentProps = {
  icon: string;
  title: string;
  description: string;
  mt?: number
}

const CardComponent: React.FC<TCardComponentProps> = ({icon, title, description, mt}) => {
  return (
    <Box
      bg="white"
      borderRadius="5px"
      mx="25px"
      position="relative"
      padding="20px"
      mt={`${mt}px`}
      height="fit-content"
      zIndex="100"
    >
      <Box
        width="60px"
        height="60px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="primary.dark_violet"
        p="12px"
        borderRadius="50%"
        position="absolute"
        top="-30px"
      >
        <Image
          src={icon}
        />
      </Box>
      <Box
        fontWeight="bold"
        fontSize="1xl"
        mt="40px"
      >
        { title }
      </Box>
      <Box 
        color="neutral.gray"
        mt="20px"
      >
        { description }
      </Box>
    </Box>
  )
}

export default CardComponent
