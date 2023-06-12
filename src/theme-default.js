const breakpoints = ['768px', '992px', '1200px'];

const colors = {
  white: '#fff',
  transparent: 'transparent',
  grey: ['#707070', '#C7C7C7', '#D5D5D5', '#EAEAEA', '#F8F8F8', '#F5F5F5'],
  black: '#333',
};

const space = [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 144, 192, 256];

/** Spacers */
space.zero = space[0]; // 0
space.xxs = space[1]; // 4
space.xs = space[2]; // 8
space.s = space[3]; // 12
space.m = space[4]; // 16
space.default = space[5]; // 24
space.l = space[6]; // 32
space.xl = space[7]; // 48
space.xxl = space[8]; // 64
space.big = space[9]; // 96
space.xbig = space[10]; // 128
space.huge = space[11]; // 144
space.xhuge = space[12]; // 192
space.giant = space[13]; // 256

const borders = [0, '1px solid', '2px solid'];
const border = {
  s1: '1px solid',
  s2: '2px solid',
  s3: '3px solid',
};

const fontSizes = {
  s: '10px',
  m: '12px',
  default: '14px',
  l: '16px',
};

const letterSpacings = {
  sm: '0.5px',
  md: '1px',
};

const lineHeights = {
  sm: '22px',
  md: '26px',
};

const fontWeights = {
  regular: 'normal',
  light: 100,
  book: 300,
  semiBold: 600,
  bold: 700,
};

const focused = {
  card: (theme) => ({
    '&:focus': {
      outline: `${borders[8]} ${theme?.colors.transparent}`,
    },
    '&:focus-visible': {
      outline: `${borders[8]} ${theme?.colors.aodaFocused}`,
    },
  }),
  button: (theme) => ({
    '&:focus': {
      outline: `${borders[8]} ${theme?.colors.transparent}`,
    },
    '&:focus-visible': {
      outline: `${borders[8]} ${theme?.colors.aodaFocused}`,
    },
  }),
  media: (theme) => ({
    '&:focus': {
      outline: `${borders[8]} ${theme?.colors.transparent}`,
    },
    '&:focus-visible': {
      outline: `${borders[8]} ${theme?.colors.aodaFocused}`,
    },
  }),
  textLink: (theme) => ({
    '&:focus': {
      outline: `${borders[4]} ${theme?.colors.transparent}`,
    },
    '&:focus-visible': {
      outline: `${borders[4]} ${theme?.colors.aodaFocused}`,
    },
  }),
};

export default {
  letterSpacings,
  lineHeights,
  colors,
  border,
  space,
  focused,
  borders,
  breakpoints,
  fontWeights,
  fontSizes,
};
