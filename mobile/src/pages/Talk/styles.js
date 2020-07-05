import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const BackButton = styled(RectButton)`
  width: 34px;
  height: 34px;
  border-radius: 18px;
`;

export const ContactFunction = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const DescriptionContact = styled.View`
  align-items: center;
`;

export const Data = styled.Text`
  font-size: 14px;
  color: #fff;
`;
export const NameContact = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const ProfileContact = styled.Image`
  width: 60px;
  height: 60px;
`;

export const Footer = styled.View`
  width: 100%;
  height: 66px;
  border-width: 2px;
  border-color: #ccc;
  position: absolute;
  background-color: #fff;
  bottom: 0;
  align-items: center;
  justify-content: center;
`;
export const InputContainer = styled.View`
  width: 90%;
  height: 46px;
  background-color: #ddd;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
`;
export const Input = styled.TextInput`
  flex: 1;
  height: 46px;
`;
export const SendButton = styled(RectButton)`
  width: 55px;
  height: 30px;
  background-color: #8ed16f;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;
export const SendButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 12px;
`;

export const ChatDescription = styled.ScrollView`
  width: 100%;
  padding: 0px 40px;
`;
export const ChatBallonGreen = styled.View`
  width: 220px;
  height: auto;
  padding: 20px;
  background-color: #119199;
  border-radius: 8px;
  margin-bottom: 15px;
  align-self: flex-end;
`;
export const ChatBallonBlue = styled.View`
  width: 220px;
  height: auto;
  padding: 20px;
  background-color: #1071b8;
  border-radius: 8px;
  margin-bottom: 15px;
  align-self: flex-start;
`;
export const ChatBallonText = styled.Text`
  color: #fff;
  font-size: 14px;
`;
