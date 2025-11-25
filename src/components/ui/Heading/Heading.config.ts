import { TextProps, TextStyle } from 'react-native';
import { CommonComponentProps } from '../../../types/react-native';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface IHeading {
  level: HeadingLevel;
  textAlign?: TextAlign;
}

export type HeadingProps = CommonComponentProps<TextProps, IHeading>;

type TextAlign = Extract<TextStyle['textAlign'], 'left' | 'right' | 'center'>;
