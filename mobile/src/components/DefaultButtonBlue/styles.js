import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Button = styled(RectButton)`
  width: 90%;
  height: 60px;
  background-color: #11969f;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px;
  align-items: center;
  align-self: center;
  margin-top: 10px;
  border-radius: 15px;
`;

export const TextoAction = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const CircleButton = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;
