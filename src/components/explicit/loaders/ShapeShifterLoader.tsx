import AbstractLoader from './AbstractLoader';
import lottieAnimation from '../../../assets/animations/loaders/shapeshifter/shapeshifter.json';

export default class BouncingBallsLoader extends AbstractLoader {
  getLottieSource() {
    return lottieAnimation;
  }
}
