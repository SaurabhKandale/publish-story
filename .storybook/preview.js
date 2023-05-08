/** @type { import('@storybook/react').Preview } */

import { CSSReset, ThemeProvider } from '@chakra-ui/react';
import BorContainer from '../src/Components/BorderContainer/BorContainer';
import theme from '../src/theme'
import '../src/Components/Input/Input.css'
import '../src/Components/Button/button.css'
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

  },
  decorators: [
    (story) => (
      <ThemeProvider theme={theme}>
        <CSSReset/>
        <BorContainer>{story()}</BorContainer>
      </ThemeProvider>
    )
  ],
};

export default preview;
