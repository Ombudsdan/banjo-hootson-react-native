import { TextStyle } from 'react-native';
import { BreakpointKeys } from '../components/layout/Layout.config';

export const fontWeight: Record<string, FontWeight> = {
  thin: '100',
  extraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
  black: '900',
};

export const fontStyle: Record<string, FontStyle> = {
  normal: 'normal',
  italic: 'italic',
};

export const fontSize: Record<string, FontSize> = {
  h1: 32,
  h2: 24.8,
  h3: 20,
  h4: 18.4,
  large: 24,
  medium: 18,
  base: 16,
  small: 14.4,
  tiny: 13.2,
};

export const fontFamily: Record<string, FontFamily> = {
  coiny: 'Coiny',
  poppins: 'Poppins',
};

export const colour: Record<string, Colour> = {
  white: 'rgb(255, 255, 255)',
  black: 'rgb(8, 3, 0)',
  orange: 'rgb(204, 78, 0)',
  blue: 'rgb(0, 126, 204)',
  red: 'rgb(204, 0, 24)',
  yellow: 'rgb(204, 180, 0)',
  brown: 'rgb(126, 48, 0)',
  beige: 'rgb(255, 236, 224)',
  tan: 'rgb(233, 225, 218)',
  complementaryBlue: 'rgb(0, 24, 204)',
  playfulBlue: 'rgb(78, 0, 204)',
  complementaryGreen: 'rgb(0, 204, 180)',
  vibrantGreen: 'rgb(0, 204, 78)',
  playfulGreen: 'rgb(0, 204, 78)',
  pink: 'rgb(204, 0, 126)',
  darkOrange: 'rgb(165, 63, 0)',
  brightOrange: 'rgb(243, 93, 0)',
  lightOrange: 'rgb(255, 127, 47)',
  veryLightOrange: 'rgb(255, 163, 106)',
  grey: 'rgb(110, 100, 94)',
  light: 'rgb(255, 236, 224)',
  veryLight: 'rgb(255, 248, 243)',
  overlayBackdrop: 'rgba(0, 0, 0, 0.65)',
  feintBorder: 'rgba(0, 0, 0, 0.1)',

  // Brand colours
  instagram: 'rgb(229, 39, 101)',
  threads: 'rgb(207, 43, 206)',
  facebook: 'rgb(60, 93, 159)',
};

export const buttonColours: Record<string, Colour> = {
  buttonPrimary: colour.orange,
  buttonPrimaryText: colour.white,
  buttonPrimaryBorder: colour.darkOrange,
  buttonPrimaryHover: colour.brightOrange,
  buttonPrimaryActive: colour.darkOrange,

  buttonSecondary: colour.brown,
  buttonSecondaryText: colour.white,
  buttonSecondaryBorder: colour.darkOrange,
  buttonSecondaryHover: colour.brightOrange,
  buttonSecondaryActive: colour.brown,

  buttonTertiary: colour.light,
  buttonTertiaryText: 'rgb(128, 49, 0)',
  buttonTertiaryBorder: colour.grey,
  buttonTertiaryHover: colour.lightOrange,
  buttonTertiaryActive: colour.veryLight,
};

export const linkColours: Record<string, Colour> = {
  link: colour.blue,
  linkUnderline: colour.complementaryBlue,
  linkHover: colour.playfulBlue,
  linkVisited: colour.blue,
  linkActive: colour.orange,
};

export const statusColours: Record<string, Colour> = {
  info: colour.blue,
  success: colour.playfulGreen,
  warning: colour.yellow,
  error: colour.red,
};

export const breakpoints: Record<BreakpointKeys, Breakpoint> = {
  xl: 1140,
  l: 960,
  m: 720,
  s: 540,
  xs: 480,
};

export const zIndex: Record<string, ZIndex> = {
  backdrop: 1000,
  nav: 999,
  navAboveBackdrop: 1001,
  dialog: 1002,
};

export const lineHeight: LineHeight = 1.4;
export const pageWidth: PageWidth = 1320;
export const navHeight: NavHeight = 72;

type FontWeight = NonNullable<TextStyle['fontWeight']>;
type FontStyle = NonNullable<TextStyle['fontStyle']>;
type FontSize = NonNullable<TextStyle['fontSize']>;
type FontFamily = NonNullable<TextStyle['fontFamily']>;
type LineHeight = NonNullable<TextStyle['lineHeight']>;
type Colour = NonNullable<TextStyle['color']>;
type PageWidth = number;
type NavHeight = number;
type Breakpoint = number;
type ZIndex = number;
