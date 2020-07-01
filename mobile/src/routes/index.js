import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './AppStackRoutes';

function MainNavigator() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default MainNavigator;
