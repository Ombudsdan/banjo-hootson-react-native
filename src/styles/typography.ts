import { fontFamily, fontStyle, fontWeight } from './variables';

const coinyBaseStyles = {
  regular: { fontFamily: fontFamily.coiny },
} as const;

const poppinsBaseStyles = {
  thin: { fontFamily: fontFamily.poppins, fontWeight: fontWeight.thin },
  extraLight: {
    fontFamily: fontFamily.poppins,
    fontWeight: fontWeight.extraLight,
  },
  light: { fontFamily: fontFamily.poppins, fontWeight: fontWeight.light },
  regular: { fontFamily: fontFamily.poppins, fontWeight: fontWeight.regular },
  medium: { fontFamily: fontFamily.poppins, fontWeight: fontWeight.medium },
  semiBold: { fontFamily: fontFamily.poppins, fontWeight: fontWeight.semiBold },
  bold: { fontFamily: fontFamily.poppins, fontWeight: fontWeight.bold },
  extraBold: {
    fontFamily: fontFamily.poppins,
    fontWeight: fontWeight.extraBold,
  },
  black: { fontFamily: fontFamily.poppins, fontWeight: fontWeight.black },
} as const;

const poppinsItalicStyles = {
  thin: combineItalic('thin'),
  regular: combineItalic('regular'),
  medium: combineItalic('medium'),
  semiBold: combineItalic('semiBold'),
  bold: combineItalic('bold'),
  extraBold: combineItalic('extraBold'),
  black: combineItalic('black'),
} as const;

export const fontFamilyStyles = {
  ...buildStyles('coiny', coinyBaseStyles),
  ...buildStyles('poppins', poppinsBaseStyles),
  ...buildStyles('poppins', poppinsItalicStyles, fontStyle.italic),
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

function combineItalic(style: keyof typeof poppinsBaseStyles) {
  const baseStyle = poppinsBaseStyles[style];
  const exemptions = ['extraLight', 'light'];

  if (!baseStyle || exemptions.includes(style)) return {};

  return {
    ...baseStyle,
    fontStyle: fontStyle.italic,
  };
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
