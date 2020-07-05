import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #11969f;
`;
export const Title = styled.Text`
  flex: 1;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const ChatContainer = styled(RectButton)`
  width: 100%;
  height: 100px;
  background-color: #fff;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 3px;
`;
export const ChatTitle = styled.Text`
  color: #626262;
  font-size: 18px;
  font-weight: bold;
  line-height: 30px;
`;
export const ChatSubtitle = styled.Text`
  color: #1071b8;
  font-size: 13px;
  font-weight: bold;
  text-align: right;
`;
export const ChatDescription = styled.Text`
  color: #979797;
  font-size: 15px;
`;
export const ChatTime = styled.Text`
  color: #979797;
  font-size: 12px;
  text-align: right;
`;

export const Swipe = styled.ImageBackground`
  width: 80px;
  height: 100px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Ball = styled.View`
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 15px;
`;
