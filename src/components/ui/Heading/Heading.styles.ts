import { StyleSheet, TextStyle } from 'react-native';
import { fontFamilyStyles } from 'styles/typography';
import { fontSize, lineHeight } from 'styles/variables';
import { HeadingLevel } from './Heading.config';

const HEADING_LEVELS = [1, 2, 3, 4, 5, 6] as HeadingLevel[];

export const headingStyles = StyleSheet.create<HeadingStyles>({
  ...generateHeadingStyles(),
});

function generateHeadingStyles(): HeadingStyles {
  return HEADING_LEVELS.reduce((acc, level) => {
    const headingLevel = `h${level}` as keyof typeof fontSize;
    acc[level] = {
      ...fontFamilyStyles.coiny_regular,
      fontSize: fontSize[headingLevel],
      lineHeight: fontSize[headingLevel] * lineHeight,
    };
    return acc;
  }, {} as HeadingStyles);
}

type HeadingStyles = Record<HeadingLevel, TextStyle>;
