import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import Home from '../pages/Home';
import Chat from '../pages/Chat';
import Management from '../pages/Management';
import Notification from '../pages/Notification';
import Profile from '../pages/Profile';

const AppTabs = createBottomTabNavigator();

function MainTabs() {
  return (
    <AppTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home';
              break;
            case 'Chat':
              iconName = focused ? 'wechat' : 'wechat';
              break;
            case 'Management':
              iconName = focused ? 'list' : 'list';
              break;
            case 'Notification':
              iconName = focused ? 'bell' : 'bell';
              break;
            case 'Profile':
              iconName = focused ? 'user' : 'user';
              break;
          }

          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#FCC419',
        inactiveTintColor: 'gray',
      }}>
      <AppTabs.Screen options={{ title: 'Inicio' }} name="Home" component={Home} />
      <AppTabs.Screen options={{ title: 'Mensagens' }} name="Chat" component={Chat} />
      <AppTabs.Screen options={{ title: 'Gerenciar' }} name="Management" component={Management} />
      <AppTabs.Screen
        options={{ title: 'Notification' }}
        name="Notification"
        component={Notification}
      />
      <AppTabs.Screen options={{ title: 'Perfil' }} name="Profile" component={Profile} />
    </AppTabs.Navigator>
  );
}

export default MainTabs;
