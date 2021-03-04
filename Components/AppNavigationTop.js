import React from 'react';
import { Appbar } from 'react-native-paper';

const AppNavigationTop = (props) => {
  const dots = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

  return (
    <Appbar.Header>
      <Appbar.Content title={props.title} /> 
      <Appbar.Action icon={dots} onPress={() => {}} />
    </Appbar.Header>
  );
}

export default AppNavigationTop;