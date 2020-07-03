import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Footer = styled.View`
  width: 100%;
  height: auto;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const TextoAction = styled.Text`
  font-size: 16;
  color: ${(props) => props.bgColor};
`;

export const CircleButton = styled(RectButton)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${(props) => props.bgColor};
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;
