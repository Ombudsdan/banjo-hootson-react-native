import { fontFamily, fontStyle, fontWeight } from './variables';

const poppinsBaseStyles = {
  thin: { fontFamily: fontFamily.poppinsThin },
  extraLight: { fontFamily: fontFamily.poppinsExtraLight },
  light: { fontFamily: fontFamily.poppinsLight },
  regular: { fontFamily: fontFamily.poppinsRegular },
  medium: { fontFamily: fontFamily.poppinsMedium },
  semiBold: { fontFamily: fontFamily.poppinsSemiBold },
  bold: { fontFamily: fontFamily.poppinsBold },
  extraBold: { fontFamily: fontFamily.poppinsExtraBold },
  black: { fontFamily: fontFamily.poppinsBlack },
} as const;

const poppinsItalicStyles = {
  thin: {
    fontFamily: fontFamily.poppinsThinItalic,
  },
  extraLight: {
    fontFamily: fontFamily.poppinsExtraLightItalic,
  },
  light: {
    fontFamily: fontFamily.poppinsLightItalic,
  },
  regular: {
    fontFamily: fontFamily.poppinsItalic,
  },
  medium: {
    fontFamily: fontFamily.poppinsMediumItalic,
  },
  semiBold: {
    fontFamily: fontFamily.poppinsSemiBoldItalic,
  },
  bold: {
    fontFamily: fontFamily.poppinsBoldItalic,
  },
  extraBold: {
    fontFamily: fontFamily.poppinsExtraBoldItalic,
  },
  black: {
    fontFamily: fontFamily.poppinsBlackItalic,
    fontStyle: fontStyle.italic,
  },
} as const;

export const fontFamilyStyles = {
  ...buildStyles('poppins', poppinsBaseStyles),
  ...buildStyles('poppins', poppinsItalicStyles, fontStyle.italic),
} as const;

export const fontUsage = {
  heading: fontFamilyStyles.poppins_bold,
  subHeading: fontFamilyStyles.poppins_bold,
  body: fontFamilyStyles.poppins_regular,
  emphasis: fontFamilyStyles.poppins_regular_italic,
} as const;

function buildStyles<
  F extends keyof typeof fontFamily,
  S extends Styles,
  M extends string | undefined = undefined,
>(family: F, styles: S, modifier?: M) {
  return Object.entries(styles).reduce((acc, [key, value]) => {
    const newKey = [family, String(key), modifier]
      .filter(Boolean)
      .join('_') as keyof MakeFontStyles<F, S, M>;

    acc[newKey] = value as StyleProperty<S>;
    return acc;
  }, {} as MakeFontStyles<F, S, M>);
}

type Styles = Record<string, object>;
type StyleProperty<S extends Styles> = S[keyof S];
type StyleKey<S extends Styles> = keyof S & string;
type MakeFontStyles<
  F extends keyof typeof fontFamily,
  S extends Styles,
  M extends string | undefined = undefined,
> = Record<
  M extends string ? `${F}_${StyleKey<S>}_${M}` : `${F}_${StyleKey<S>}`,
  StyleProperty<S>
>;
