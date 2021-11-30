import React from 'react';
import { ThemeProvider } from 'styled-components';
import Main from './components/Main';
import { cube, square } from './utils/math';

const theme = {
  fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
};

function App() {
  const a = cube(2);
  const b = cube(4);
  /*#__PURE__*/ square(2);
  /*#__PURE__*/ square(2);
  return (
    <ThemeProvider
      theme={theme}
    >
      {a}
      {b}
      <Main />
    </ThemeProvider>
  );
}

export default App;
