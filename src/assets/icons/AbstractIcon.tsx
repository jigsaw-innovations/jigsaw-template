import React from 'react';
import {View, ViewProps, StyleSheet, TouchableOpacity} from 'react-native';
import Svg, {Path, SvgProps} from 'react-native-svg';

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
  isFilled?: boolean; // Renamed to `isFilled`
  onPress?: () => void;
  disabled?: boolean;
  opacity?: number;
}

abstract class AbstractIcon extends React.Component<IconProps & ViewProps> {
  abstract path(): string;

  render() {
    const {
      size = 24,
      color = 'black',
      isFilled = false, // Renamed to `isFilled`
      onPress,
      disabled,
      opacity = 1,
      style,
      ...otherProps
    } = this.props;

    const svgProps: SvgProps = {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      stroke: color,
      strokeWidth: isFilled ? undefined : '1.5', // Using `isFilled`
      fill: isFilled ? color : 'none', // Using `isFilled`
      opacity,
      ...otherProps,
    };

    const content = (
      <Svg {...svgProps}>
        <Path strokeLinecap="round" strokeLinejoin="round" d={this.path()} />
      </Svg>
    );

    return (
      <View style={[styles.container, style]}>
        {onPress ? (
          <TouchableOpacity onPress={onPress} disabled={disabled}>
            {content}
          </TouchableOpacity>
        ) : (
          content
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AbstractIcon;
