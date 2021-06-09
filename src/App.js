import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import Form from './components/Form';

export default function App() {
  return (
    <ChakraProvider>
      <Form/>
    </ChakraProvider>
  );
}
