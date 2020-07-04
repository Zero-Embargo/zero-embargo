import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  padding: 30px 20px;
`;

export const Header = styled.View`
  width: 100%;
  height: auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const FollowProfile = styled(RectButton)`
  width: 55px;
  height: 55px;
`;
export const Profile = styled.Image`
  width: 55px;
  height: 55px;
`;

export const InputSearch = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 16px;
  margin-left: 15px;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding-top: 10;
  padding-right: 10;
  padding-bottom: 10;
  padding-left: 0;
  background-color: #fff;
  border-radius: 16px;
  color: #11969f;
`;

export const UserText = styled.Text`
  width: 100%;
  color: #fff;
  margin-right: 26px;
  font-size: 16px;
`;

export const LogoGrayContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: -20px;
`;

export const LogoGray = styled.Image`
  width: 80px;
  height: 80px;
`;

export const Content = styled.View`
  width: 100%;
  height: auto;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Grids = styled.ScrollView`
  width: 100%;
  height: auto;
`;

export const GridHeader = styled.View`
  width: 100%;
  flex-direction: row;
`;
export const Grid = styled(RectButton)`
  flex: 1;
  margin: 8px;
  width: 100%;
  height: auto;
  padding: 5px;
  background: #fff;
  align-items: center;
  border-radius: 20px;
`;
export const GridTitle = styled.Text`
  color: #11969f;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;
export const GridImage = styled.Image`
  width: 100%;
  height: 120px;
  margin: 10px;
`;
