import React, {Component, RefObject} from 'react';
import {View, StyleSheet, Modal} from 'react-native';
import LottieView from 'lottie-react-native';

interface LoaderProps {
  backgroundColor?: string;
  size?: {
    width: number;
    height: number;
  };
}

interface LoaderState {
  isPlaying: boolean;
}

export default abstract class AbstractLoader extends Component<
  LoaderProps,
  LoaderState
> {
  protected animationRef: RefObject<LottieView> = React.createRef<LottieView>();

  constructor(props: LoaderProps) {
    super(props);
    this.state = {
      isPlaying: true, // Consider using this state if needed.
    };
  }

  componentDidMount() {
    const currentAnimation = this.animationRef.current;
    if (currentAnimation) {
      currentAnimation.play(); // Start playing the animation
    }
  }

  abstract getLottieSource(): any;

  render() {
    const {size, backgroundColor} = this.props;
    const customStyle = {
      width: size?.width || 120,
      height: size?.height || 120,
      backgroundColor: backgroundColor || 'rgba(0, 0, 0, 0.7)',
    };

    return (
      <Modal animationType="fade" transparent={true}>
        <View style={styles.container}>
          <View style={[styles.lottieWrapper, customStyle]}>
            <LottieView
              ref={this.animationRef}
              source={this.getLottieSource()}
              loop
              style={styles.lottie}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  lottieWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 10,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: 120,
    height: 120,
  },
});
