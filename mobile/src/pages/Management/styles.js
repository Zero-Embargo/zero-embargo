import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #119199;
`;

export const Texto = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Content = styled.View`
  width: 100%;
  height: auto;
  margin-top: auto;
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
  height: 300px;
  padding: 5px;
  background: #fff;
  align-items: center;
  border-radius: 20px;
  justify-content: space-between;
`;
export const GridTitle = styled.Text`
  color: #11969f;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
export const GridImage = styled.Image`
  width: 100%;
  height: 200px;
  margin: 10px;
`;

export const Logo = styled.Image`
  width: 248px;
  height: 181px;
  align-self: center;
`;
