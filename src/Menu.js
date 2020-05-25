import React from 'react';
import logo from './assets/banner.png';

import { Card, Label, Image, Button } from 'semantic-ui-react'

export default function Menu({ onPlay }) {
  const [time, setTime] = React.useState(null);

  return <div className="Menu">
    <Image src={logo} fluid />
    <Card fluid>
      <Card.Content>
        <Card.Header>Duração do dia</Card.Header>
      </Card.Content>
      <Card.Content>
        <Label as='a' onClick={() => setTime(60)} color={time === 60 ? 'blue' : null}>01:00</Label>
        <Label as='a' onClick={() => setTime(180)} color={time === 180 ? 'blue' : null}>03:00</Label>
        <Label as='a' onClick={() => setTime(300)} color={time === 300 ? 'blue' : null}>05:00</Label>
        <Label as='a' onClick={() => setTime(450)} color={time === 450 ? 'blue' : null}>07:30</Label>
        <Label as='a' onClick={() => setTime(600)} color={time === 600 ? 'blue' : null}>10:00</Label>
        <Label as='a' onClick={() => setTime(720)} color={time === 720 ? 'blue' : null}>12:00</Label>
        <Label as='a' onClick={() => setTime(900)} color={time === 900 ? 'blue' : null}>15:00</Label>
        <Label as='a' onClick={() => setTime(0)} color={time === 0 ? 'blue' : null}>Ilimitado</Label>
      </Card.Content>
      <Card.Content>
        <Button basic color='green' fluid onClick={() => onPlay(time)}>Jogar</Button>
      </Card.Content>
    </Card>
  </div>
}
