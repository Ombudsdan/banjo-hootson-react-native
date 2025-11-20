import { fontFamily, fontStyle, fontWeight } from './variables';

const coinyBaseStyles = {
  regular: { fontFamily: fontFamily.coiny },
};

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
};

const poppinsItalicStyles = {
  thin: combineItalic('thin'),
  regular: combineItalic('regular'),
  medium: combineItalic('medium'),
  semiBold: combineItalic('semiBold'),
  bold: combineItalic('bold'),
  extraBold: combineItalic('extraBold'),
  black: combineItalic('black'),
};

export const fontFamilyStyles = {
  ...buildStyles('coiny', coinyBaseStyles),
  ...buildStyles('poppins', poppinsBaseStyles),
  ...buildStyles('poppins', poppinsItalicStyles, fontStyle.italic),
};

function buildStyles(
  family: keyof typeof fontFamily,
  styles: Styles,
  modifier?: string,
) {
  return Object.entries(styles).reduce((acc, style) => {
    const [key, value] = style;
    const newKey = `${family}_${key}` + (modifier ? `_${modifier}` : '');
    acc[newKey] = value;
    return acc;
  }, {} as Record<string, object>);
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

type Styles =
  | typeof coinyBaseStyles
  | typeof poppinsBaseStyles
  | typeof poppinsItalicStyles;
