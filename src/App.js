import React from 'react';
import { Container } from 'semantic-ui-react'
import Menu from './Menu';

export default function App() {
  return <Container fluid>
    <Menu onPlay={(time) => console.log(time)} />
  </Container>
}
