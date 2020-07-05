import React from 'react';
import { Container, Text } from './styles';

function Button({ bgColor, navigation, Texto, routeName }) {
  return (
    <Container onPress={() => navigation.navigate(routeName)} bgColor={bgColor}>
      <Text>{Texto}</Text>
    </Container>
  );
}

export default Button;
