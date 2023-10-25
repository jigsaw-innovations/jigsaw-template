import AbstractLoader from './AbstractLoader';
import lottieAnimation from './shapeshifter/shapeshifter.json';

export default class BouncingBallsLoader extends AbstractLoader {
  getLottieSource() {
    return lottieAnimation;
  }
}
