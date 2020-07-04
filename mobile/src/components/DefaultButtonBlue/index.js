import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Button, TextoAction, CircleButton } from './styles';

function DefaultButtonBlue({ navigation, routeName }) {
  return (
    <Button onPress={() => navigation.navigate(routeName)}>
      <TextoAction>Continuar</TextoAction>
      <CircleButton>
        <Feather name="arrow-right" size={26} color="#11969F" />
      </CircleButton>
    </Button>
  );
}

export default DefaultButtonBlue;
