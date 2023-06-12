import css from '@styled-system/css';
import { variant } from '@styled-system/variant';
import ThemeStyles from './components/ThemeStyles';

const themeStyles = new ThemeStyles();

themeStyles.addBaseStyles('SomeButton')(
  ({ theme }) =>
    css({
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      mt: 'm',
      border: theme.borders[1],
    }),
  variant({
    prop: 'horizontalAlignment',
    variants: {
      left: {
        textAlign: 'start',
      },
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'end',
      },
    },
  })
);

export default themeStyles;
