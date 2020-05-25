import React from 'react';
import { Button, Card } from 'semantic-ui-react';

export default function Clock({ time, onTimeEnd }) {
  const [isActive, setIsActive] = React.useState(true);
  const [remainingTime, setRemainingTime] = React.useState(time);
  const order = time === 0 ? 'asc' : 'desc';

  React.useEffect(() => {
    if(!isActive) { return onTimeEnd(); }
    if (order === 'asc') {
      setTimeout(() => {
        setRemainingTime((remainingTime) => remainingTime + 1);
      }, 1000);
    } else if(order === 'desc') {
      if (remainingTime <= 0) {
        setRemainingTime(null);
        setIsActive(false);
      } else {
        setTimeout(() => {
          setRemainingTime((remainingTime) => remainingTime - 1);
        }, 1000);
      }
    }
  }, [remainingTime]);

  return (
    <Card.Content textAlign="center">
      <p style={{ fontSize: '25px', marginBottom: '10px' }}>
        {Math.floor(remainingTime / 60.0).toString().padStart(2, '0')}:{(remainingTime % 60).toString().padStart(2, '0')}
      </p>
      <Button fluid onClick={() => setIsActive(false) }>Votar agora</Button>
    </Card.Content>
  )
};
