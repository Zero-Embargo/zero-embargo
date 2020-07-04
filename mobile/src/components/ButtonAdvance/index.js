import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Button, TextoAction, CircleButton } from './styles';

function ButtonAdvance({ bgColor, Texto, bgColorIcon, navigation }) {
  return (
    <Button>
      <TextoAction bgColor={bgColor}>{Texto}</TextoAction>
      <CircleButton bgColor={bgColor} onPress={() => navigation.navigate('SignUp1')}>
        <Feather name="arrow-right" size={26} color={bgColorIcon} />
      </CircleButton>
    </Button>
  );
}

export default ButtonAdvance;
