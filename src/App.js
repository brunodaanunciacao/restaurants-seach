import React from 'react';
import { ThemeProvider } from 'styled-components'
import { Reset } from  'styled-reset'

import Theme from './theme'
import Home from './pages/Home'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Reset />
      <Home />
    </ThemeProvider>
  );
}

export default App;
