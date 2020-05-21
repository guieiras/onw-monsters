import React from 'react';
import { Container } from 'semantic-ui-react'
import Menu from './Menu';

export default function App() {
  const [clock, setClock] = React.useState(null);
  const audioRef = React.useRef();
  const prepareAndSetClock = (time) => {
    audioRef.current.src = null;
    audioRef.current.play();
    setClock(time);
  }

  return <Container fluid>
    { clock === null && <Menu onPlay={prepareAndSetClock} /> }
    <audio ref={audioRef} />
  </Container>
}
