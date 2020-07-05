import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 80%;
  height: 50px;
  margin: auto;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
