import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

export const UploadImage = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  width: 100%;
  height: auto;
  align-items: center;
  margin: 20px 0px;
`;
export const ProfilePhoto = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

export const DescriptionUpload = styled.Text`
  color: #9a9a9e;
  font-size: 12px;
  line-height: 24px;
  font-weight: bold;
`;

export const InputContainer = styled.View`
  width: 100%;
  height: auto;
  align-items: center;
  margin: 10px 0px;
`;

export const Input = styled.TextInput`
  width: 90%;
  height: 60px;
  border-width: 1px;
  border-color: #11969f;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;
