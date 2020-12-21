import everyoneClose from '../assets/audio/pt-BR/everyoneclose.mp3';
import everyoneOpen from '../assets/audio/pt-BR/everyoneopen.mp3';
import everyoneVote from '../assets/audio/pt-BR/everyonevote.mp3';
import hunterClose from '../assets/audio/pt-BR/hunterclose.mp3';
import hunterWake from '../assets/audio/pt-BR/hunterwake.mp3';
import vampireClose from '../assets/audio/pt-BR/vampireclose.mp3';
import vampireWake from '../assets/audio/pt-BR/vampirewake.mp3';
import werewolfClose from '../assets/audio/pt-BR/werewolfclose.mp3';
import werewolfWake from '../assets/audio/pt-BR/werewolfwake.mp3';
import witchClose from '../assets/audio/pt-BR/witchclose.mp3';
import witchWake from '../assets/audio/pt-BR/witchwake.mp3';
import zombieClose from '../assets/audio/pt-BR/zombieclose.mp3';
import zombieWake from '../assets/audio/pt-BR/zombiewake.mp3';

const actions = {
  everyoneClose: {
    audio: everyoneClose,
    text: 'Todos, fechem os olhos!',
  },
  everyoneOpen: {
    audio: everyoneOpen,
    text: 'Todos, abram os olhos!',
  },
  everyoneVote: {
    audio: everyoneVote,
    text: 'Acabou o tempo! 3, 2, 1... Votem!',
  },
  hunterClose: {
    audio: hunterClose,
    text: 'Caçador, feche os olhos.',
  },
  hunterWake: {
    audio: hunterWake,
    text: 'Caçador, acorde!',
  },
  vampireClose: {
    audio: vampireClose,
    text: 'Vampiro, feche os olhos.',
  },
  vampireWake: {
    audio: vampireWake,
    text: 'Vampiro, acorde!',
  },
  werewolfClose: {
    audio: werewolfClose,
    text: 'Lobisomens, fechem os olhos.',
  },
  werewolfWake: {
    audio: werewolfWake,
    text: 'Lobisomens, acordem!',
  },
  witchClose: {
    audio: witchClose,
    text: 'Bruxa, feche os olhos.',
  },
  witchWake: {
    audio: witchWake,
    text: 'Bruxa, acorde!',
  },
  zombieClose: {
    audio: zombieClose,
    text: 'Zumbi, feche os olhos.',
  },
  zombieWake: {
    audio: zombieWake,
    text: 'Zumbi, acorde.',
  }
};

export default actions;
