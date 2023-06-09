import React, { useEffect, useState } from 'react';
import { Container, Heading } from '@chakra-ui/react';
import GeneratedForm from './components/GeneratedForm';

function App() {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    fetch('/fields.json')
      .then(response => response.json())
      .then(data => setFields(data));
  }, []);

  return (
    <Container>
      <Heading as="h1" size="lg" noOfLines={1}>
        A form generated by config object
      </Heading>
      <GeneratedForm fields={fields} method="POST" />
    </Container>
  );
}

export default App;
