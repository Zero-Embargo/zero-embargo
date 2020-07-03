import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { CommonActions } from '@react-navigation/native';

function Auth({ navigation }) {
  console.tron.log(CommonActions);
  const [user, setUser] = useState('Davilson');

  useEffect(() => {
    verificaUser();
  }, []);

  function verificaUser() {
    if (!user) {
      navigation.dispatch(
        CommonActions.navigate({
          name: 'Home',
        })
      );
    } else {
      navigation.dispatch(
        CommonActions.navigate({
          name: 'Information',
        })
      );
    }
  }

  return (
    <ActivityIndicator
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      size="large"
      color="#11969f"
    />
  );
}

export default Auth;
