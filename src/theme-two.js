import defaultTheme from './theme-default';

/** Colors */
const themeColors = {
  black: '#E3173E',
  red: '#007DBA',
  blue: '#1B1B1B',
  darkBlue: '#004478',
};

/** Colors */
const colors = {
  ...defaultTheme.colors,
  ...themeColors,
  primary: themeColors.red,
  secondary: themeColors.darkBlue,
  tertiary: themeColors.darkBlue,
};

/** Fonts */
const fallBackFontFamily = 'Helvetica, Arial, "Lucida Grande", sans-serif';

const fonts = {
  default: `'Helvetica Neue',${fallBackFontFamily}`,
  bold: `'Helvetica Neue Bold',${fallBackFontFamily}`,
  heading: `'National Regular',${fallBackFontFamily}`,
  headingMedium: `'National Medium', ${fallBackFontFamily}`,
};

/** Header */
const header = {
  desktop: {
    height: '84px',
    stickyHeight: '84px',
  },
  mobile: {
    height: '42px',
  },
};

const theme = {
  ...defaultTheme,
  name: 'TWO THEME',
  colors,
  fonts,
  header,
};

export default theme;
