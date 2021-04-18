import React from 'react';
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Reset } from  'styled-reset'

import store from './redux/store'
import Theme from './theme'
import Home from './pages/Home/index'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <Reset />
        <Home />
      </ThemeProvider>
    </Provider>    
  );
}

export default App;
