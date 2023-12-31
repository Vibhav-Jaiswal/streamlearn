import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Singup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>Video Hub</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />

          <Input
            type={'text'}
            placeholder={'Name'}
            required
            focusBorderColor={'purple.500'}
          />

          <Input
            type={'email'}
            placeholder={'Email'}
            required
            focusBorderColor={'purple.500'}
          />

          <Input
            type={'password'}
            placeholder={'paswored'}
            required
            focusBorderColor={'purple.500'}
          />

          <Button colorScheme="purple" type="submit">
            Sing Up
          </Button>

          <Text textAlign={'right'}>
            Already Singed Up?{" "}
            <Button variant={'link'} color={'purple'}>
            <Link to={'/login'}>Login In</Link>
          </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Singup;
