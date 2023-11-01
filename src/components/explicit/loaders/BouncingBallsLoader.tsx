import AbstractLoader from './AbstractLoader';
import lottieAnimation from '../../../assets/animations/loaders/bouncing/bouncing.json';

export default class BouncingBallsLoader extends AbstractLoader {
  getLottieSource() {
    return lottieAnimation;
  }
}
