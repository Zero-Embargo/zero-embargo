import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 30px 20px 0px;
  background-color: #11969f;
`;

export const SearchContainer = styled.View`
  width: 100%;
  height: auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
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

export const Professionals = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  flex: 1;
  text-align: center;
  margin-right: 20px;
`;

export const HeaderDescription = styled.View`
  width: 100%;
  height: 50px;
  background-color: #11969f;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;
export const List = styled.View`
  width: 100%;
  height: auto;
`;
export const ListItem = styled.View`
  width: 100%;
  height: auto;
  flex-direction: row;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 10px;
`;
export const ListImage = styled.Image`
  height: auto;
  flex: 1;
`;
export const ListDescription = styled.View`
  flex: 3;
  padding: 5px 10px;
`;
export const Profission = styled.Text`
  color: #1071b8;
  font-size: 12px;
  text-align: right;
  margin-right: 40px;
`;
export const NameProfessional = styled.Text`
  color: #4a4a4a;
  font-size: 16px;
  font-weight: bold;
`;
export const LocationDescription = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Location = styled.View`
  flex-direction: row;
`;
export const Neighborhood = styled.Text`
  color: gray;
  margin-left: 5px;
`;
export const RatingDescription = styled.View`
  flex-direction: row;
`;
export const RatingText = styled.Text`
  color: gray;
  margin-left: 5px;
`;
export const NumberContact = styled.Text``;
export const FooterList = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const RatingImage = styled.Image`
  width: 80px;
  height: 16px;
`;
export const FooterDescription = styled.Text`
  color: #4a4a4a;
  font-size: 12px;
`;
