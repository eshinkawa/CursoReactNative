import {PixelRatio} from 'react-native';

const scaleFont = size => size * PixelRatio.getFontScale();

export const FONT_FAMILY_LIGHT = 'OpenSans-Light';
export const FONT_FAMILY_REGULAR = 'OpenSans-Regular';
export const FONT_FAMILY_SEMI_BOLD = 'OpenSans-SemiBold';
export const FONT_FAMILY_BOLD = 'OpenSans-Bold';
export const FONT_FAMILY_EXTRA_BOLD = 'OpenSans-ExtraBold';

// export const FONT_SIZE_24 = scaleFont(24);//FONT_SIZE_X_LARGE
// export const FONT_SIZE_20 = scaleFont(20);//FONT_SIZE_LARGE
// export const FONT_SIZE_16 = scaleFont(16);//FONT_SIZE_MEDIUM
// export const FONT_SIZE_14 = scaleFont(14);//FONT_SIZE_SMALL
// export const FONT_SIZE_12 = scaleFont(12); //FONT_SIZE_X_SMALL


export const FONT_SIZE_X_LARGE = scaleFont(24);//FONT_SIZE_X_LARGE
export const FONT_SIZE_LARGE = scaleFont(20);//FONT_SIZE_LARGE
export const FONT_SIZE_MEDIUM = scaleFont(16);//FONT_SIZE_MEDIUM
export const FONT_SIZE_SMALL = scaleFont(14);//FONT_SIZE_SMALL
export const FONT_SIZE_X_SMALL = scaleFont(12); //FONT_SIZE_X_SMALL
