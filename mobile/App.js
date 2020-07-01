import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Routes />
      <StatusBar style="light" backgroundColor="#4169E1" />
    </SafeAreaView>
  );
}
