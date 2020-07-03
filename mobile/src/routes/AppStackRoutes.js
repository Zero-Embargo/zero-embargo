import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Information from '../pages/Information';
import Auth from '../pages/Auth';

import MainTabs from './AppTabsRoutes';

const AppStack = createStackNavigator();

function MainStack() {
  return (
    <AppStack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        animationEnabled: false,
        headerShown: false,
      }}>
      <AppStack.Screen name="Home" component={MainTabs} />
      <AppStack.Screen name="Auth" component={Auth} />
      <AppStack.Screen name="Information" component={Information} />
    </AppStack.Navigator>
  );
}

export default MainStack;
