import { forwardRef } from 'react';
import { Text } from 'react-native';
import { HeadingLevel, HeadingProps } from './Heading.config';
import { headingStyles } from './Heading.styles';

export const Heading = forwardRef<Text, HeadingProps>((props, ref) => {
  const styles = buildStyles(props);

  return (
    <Text
      {...props}
      accessibilityRole="header"
      ref={ref}
      style={styles.heading}
    >
      {props.children}
    </Text>
  );
});

export default Heading;

function buildStyles(props: HeadingProps) {
  const level: HeadingLevel = props.level || 1;

  return {
    heading: {
      ...headingStyles[level],
      textAlign: props.textAlign || 'center',
    },
  };
}
