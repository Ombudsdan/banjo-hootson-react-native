import { StyleSheet, TextStyle } from 'react-native';
import { fontSize, lineHeight } from '../../../styles/variables';
import { HeadingLevel } from './Heading.config';
import { fontFamilyStyles } from '../../../styles/typography';

const HEADING_LEVELS = [1, 2, 3, 4, 5, 6] as HeadingLevel[];

export const headingStyles = StyleSheet.create<HeadingStyles>({
  ...generateHeadingStyles(),
});

function generateHeadingStyles(): HeadingStyles {
  return HEADING_LEVELS.reduce((acc, level) => {
    console.log(fontFamilyStyles.coiny_regular);
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
