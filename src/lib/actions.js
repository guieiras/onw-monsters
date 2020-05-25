export default function trailBuilder(source) {
  applyTimerOnSource(source);
  return () => {
    return [
      source.everyoneClose,
      source.hunterWake,
      source.hunterClose,
      source.witchWake,
      source.witchClose,
      source.werewolfWake,
      source.werewolfClose,
      source.zombieWake,
      source.zombieClose,
      source.vampireWake,
      source.vampireClose,
      source.everyoneOpen,
      'day',
      source.everyoneVote,
    ];
  }
}

function applyTimerOnSource(source) {
  source.everyoneClose.timer = 2000
  source.hunterWake.timer = 5000
  source.hunterClose.timer = 2000
  source.witchWake.timer = 5000
  source.witchClose.timer = 2000
  source.werewolfWake.timer = 5000
  source.werewolfClose.timer = 2000
  source.zombieWake.timer = 5000
  source.zombieClose.timer = 2000
  source.vampireWake.timer = 5000
  source.vampireClose.timer = 2000
  source.everyoneOpen.timer = 1000
}
