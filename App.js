import React from 'react';
import { 
  DefaultTheme,
  Provider as PaperProvider 
} from 'react-native-paper';
import AppNavigationTop from './Components/AppNavigationTop';
import AppNavigationBottom from './Components/AppNavigationBottom';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2AB1BF',
    accent: 'orange',
  },
};

const App = () => {
  const [title, setTitle] = React.useState("Agileo");

  return (
    <PaperProvider theme={theme}>
      <AppNavigationTop title={title} />
      <AppNavigationBottom setTitle={setTitle} />
    </PaperProvider>
  );
}

export default App;