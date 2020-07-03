import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Footer, TextoAction, CircleButton } from './styles';

function ButtonAdvance({ Background, bgColor, Texto, bgColorIcon }) {
  return (
    <Footer>
      <TextoAction bgColor={bgColor}>{Texto}</TextoAction>
      <CircleButton bgColor={bgColor}>
        <Feather name="arrow-right" size={26} color={bgColorIcon} />
      </CircleButton>
    </Footer>
  );
}

export default ButtonAdvance;
