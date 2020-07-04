import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Information from '../pages/Information';
import Auth from '../pages/Auth';
import SignUp1 from '../pages/SignUp/SignUp1/index';
import SignUp2 from '../pages/SignUp/SignUp2/index';
import SignUp3 from '../pages/SignUp/SignUp3/index';

import MainTabs from './AppTabsRoutes';

const AppStack = createStackNavigator();

function MainStack() {
  return (
    <AppStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        animationEnabled: false,
        headerShown: false,
      }}>
      <AppStack.Screen name="Home" component={MainTabs} />
      <AppStack.Screen name="Auth" component={Auth} />
      <AppStack.Screen name="Information" component={Information} />
      <AppStack.Screen name="SignUp1" component={SignUp1} />
      <AppStack.Screen name="SignUp2" component={SignUp2} />
      <AppStack.Screen name="SignUp3" component={SignUp3} />
    </AppStack.Navigator>
  );
}

export default MainStack;
