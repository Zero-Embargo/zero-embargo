import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainTabs from './AppTabsRoutes';

const AppStack = createStackNavigator();

function MainStack() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="Home" component={MainTabs} />
    </AppStack.Navigator>
  );
}

export default MainStack;
