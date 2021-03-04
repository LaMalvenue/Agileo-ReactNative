import React from 'react';
import { 
  DefaultTheme,
  Provider as PaperProvider 
} from 'react-native-paper';
import AppNavigation from './Components/AppNavigation';
import BottomAppNavigation from './Components/BottomAppNavigation';
import Slider from './Components/Slider';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2AB1BF',
    accent: 'orange',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AppNavigation />
      {/* <Slider /> */}
      <BottomAppNavigation /> 
    </PaperProvider>
  );
}