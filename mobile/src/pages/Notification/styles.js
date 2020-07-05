import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding-top: 30px;
  background-color: #11969f;
`;

export const Professionals = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  flex: 1;
  text-align: center;
  margin-right: 20px;
  padding: 20px;
`;

export const HeaderDescription = styled.View`
  width: 100%;
  height: 50px;
  padding: 20px;
  background-color: #11969f;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
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

export const Notification = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;
export const DescContainer = styled.View``;

export const CaixaEntrada = styled.View`
  width: 100%;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
`;
export const Entrada = styled.View`
  flex: 1;
  height: 40px;
  background: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;
export const EntradaText = styled.Text`
  color: #11969f;
  font-size: 14px;
  font-weight: bold;
`;
export const Arquivo = styled.View`
  flex: 1;
  height: 40px;
  background: #11969f;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;
export const ArquivoText = styled.Text`
  color: #fff;
  font-size: 13px;
  font-size: 14px;
  font-weight: bold;
`;
