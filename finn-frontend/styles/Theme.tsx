import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  colors: {
    primary:{
      cyan: 'hsl(180, 66%, 49%)',
      dark_violet: 'hsl(257, 27%, 26%)',
    },
    secondary: {
      red: 'hsl(0, 87%, 67%)'
    },
    neutral: {
      gray: 'hsl(0, 0%, 75%)',
      gray_violet: 'hsl(257, 7%, 63%)',
      dark_blue: 'hsl(255, 11%, 22%)',
      dark_violet: 'hsl(260, 8%, 14%)',
    }
  },
  breakpoints: createBreakpoints({
    sm: '375px',
    md: '48em',
    lg: '62em',
    xl: '80em'
  }),
  fontSizes: {
    xl: "18px"
  },
  fonts: {
    body: "Poppins"
  },
  fontWeights: {
    medium: 500,
    bold: 700
  }
})

export default theme