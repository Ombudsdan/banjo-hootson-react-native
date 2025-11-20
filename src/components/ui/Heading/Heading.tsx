import { forwardRef } from 'react';
import { Text } from 'react-native';
import { HeadingLevel, HeadingProps } from './Heading.config';
import { headingStyles } from './Heading.styles';

export const Heading = forwardRef<Text, HeadingProps>((props, ref) => {
  const { level, children, ...extraProps } = props;

  const styles = buildStyles(level);

  return (
    <Text
      {...extraProps}
      accessibilityRole="header"
      ref={ref}
      style={styles.heading}
    >
      {children}
    </Text>
  );
});

export default Heading;

function buildStyles(level: HeadingLevel) {
  return { heading: headingStyles[level] };
}
