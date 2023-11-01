// TODO: resolve border radius not working
// todo: move animation into seperate file, also in HorizontalCarousel.tsx
import {ReactNode} from 'react';
import React from 'react';
import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

interface GridItemProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  rounded?: boolean;
  toggleAnimation?: boolean;
}

const GridItem: React.FC<GridItemProps> = ({
  children,
  size = 'small',
  rounded = true,
  toggleAnimation = true,
}) => {
  const scaleAnim = new Animated.Value(1);
  const brightnessAnim = new Animated.Value(1);

  const handlePressIn = () => {
    if (!toggleAnimation) {
      return;
    } // Skip animation if toggleAnimation is false

    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 0.98,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(brightnessAnim, {
        toValue: 0.88,
        duration: 150,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const handlePressOut = () => {
    if (!toggleAnimation) {
      return;
    } // Skip animation if toggleAnimation is false

    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(brightnessAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: false,
      }),
    ]).start();
  };

  let itemStyle = styles.smallItem;

  if (size === 'medium') {
    itemStyle = styles.mediumItem;
  } else if (size === 'large') {
    itemStyle = styles.largeItem;
  }

  const borderRadiusStyle = rounded ? {borderRadius: 10} : {};

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <Animated.View
        style={[
          styles.item,
          itemStyle,
          borderRadiusStyle,
          {transform: [{scale: scaleAnim}]},
        ]}>
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

interface GridProps {
  numOfColumns: number;
  children: ReactNode;
}

const Grid: React.FC<GridProps> = ({numOfColumns, children}) => {
  const columnWidth = (100 / numOfColumns).toString() + '%'; // to satisfy TypeScript

  // Wrap each child in a View with appropriate styles
  const wrappedChildren = React.Children.map(children, (child, index) => {
    // @ts-ignore
    return <View style={{width: columnWidth}}>{child}</View>; // now this should be fine
  });

  return <View style={styles.container}>{wrappedChildren}</View>;
};

export {Grid, GridItem};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    margin: 5,
  },
  smallItem: {
    height: 80,
  },
  mediumItem: {
    height: 120,
  },
  largeItem: {
    height: 160,
  },
});
