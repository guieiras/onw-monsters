import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import trailBuilder from './lib/actions'
import ptBR from './lib/pt-BR'
import Clock from './Clock';
const Actions = trailBuilder(ptBR);

export default function Game({ audioRef, clock, onFinish }) {
  const trail = React.useRef();
  const [currentAction, setCurrentAction] = React.useState({});

  function nextAction() {
    if (trail.current.length > 0) {
      const [item] = trail.current.splice(0, 1);
      if (item === 'day') {
        setCurrentAction({ text: 'Dia', action: 'day' });
      } else {
        const listener = () => {
          audioRef.current.removeEventListener('ended', listener);
          setTimeout(nextAction, item.timer);
        };
        setCurrentAction(item);
        audioRef.current.addEventListener('ended', listener);
        audioRef.current.src = item.audio;
        audioRef.current.play();
      }
    } else {
      onFinish();
    }
  }

  React.useEffect(() => {
    trail.current = [...Actions()];
    nextAction();
  }, [clock]); // eslint-disable-line

  return <Grid verticalAlign='middle' columns={2} centered>
    <Grid.Row>
      <Grid.Column>
        <Card>
          <Card.Content>
            <Card.Header style={{ textAlign: 'center' }}>
              {currentAction.text}
            </Card.Header>
          </Card.Content>
          {
            currentAction.action === 'day' &&
              <Card.Content>
                <Clock time={clock} onTimeEnd={nextAction} />
              </Card.Content>
          }
        </Card>
      </Grid.Column>
    </Grid.Row>
  </Grid>
}
