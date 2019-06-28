import React from 'react';
import { ThemeProvider } from 'styled-components';
import Main from './components/Main';

const theme = {
  fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
};

function App() {
  return (
    <ThemeProvider
      theme={theme}
    >
      <Main />
    </ThemeProvider>
  );
}

export default App;
