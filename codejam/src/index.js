import './style.scss';
import Sizes from './sizes';
import Game from './game';

const sizes = new Sizes();
const game = new Game(sizes.size);
game.initGame();
