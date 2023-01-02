import React from 'react';
import { ThemeProvider } from 'styled-components';

//routes
import Routes from './routes';

import { useTheme } from './hooks/theme' 

//styles
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  const { theme } = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
