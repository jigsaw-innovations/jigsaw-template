import AbstractLoader from './AbstractLoader';
import lottieAnimation from './bouncing/bouncing.json';

export default class BouncingBallsLoader extends AbstractLoader {
  getLottieSource() {
    return lottieAnimation;
  }
}
