import React, {useRef, ReactNode} from 'react';
import {
  View,
  FlatList,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

const {height} = Dimensions.get('window');

interface SnapScrollItemProps {
  children: ReactNode;
}

const SnapScrollItem: React.FC<SnapScrollItemProps> = ({children}) => (
  <View style={{height}}>{children}</View>
);

interface SnapScrollProps {
  children: ReactNode[];
}

const SnapScroll: React.FC<SnapScrollProps> = ({children}) => {
  const flatListRef = useRef<FlatList | null>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    const index = Math.round(yOffset / height);
    flatListRef.current?.scrollToOffset({
      offset: index * height,
      animated: true,
    });
  };

  return (
    <FlatList
      ref={flatListRef}
      data={children}
      renderItem={({item}) => item}
      keyExtractor={(_, index) => index.toString()}
      snapToInterval={height}
      decelerationRate="fast"
      showsVerticalScrollIndicator={false}
      onMomentumScrollEnd={handleScroll}
      bounces={false} // Disables the bounce effect, and thus the overscroll
      getItemLayout={(_, index) => ({
        length: height,
        offset: height * index,
        index,
      })}
    />
  );
};

export {SnapScrollItem, SnapScroll};
