import React, { Component } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import DefaultButton from '../../../components/DefaultButtonBlue';

import {
  Container,
  UploadImage,
  ProfilePhoto,
  DescriptionUpload,
  InputContainer,
  Input,
} from './styles';

export default class SignUp1 extends Component {
  state = {
    image: null,
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  render() {
    let { image, name, email, password, confirmPassword } = this.state;

    return (
      <Container>
        <UploadImage onPress={this.handlePickImage}>
          {image ? (
            <ProfilePhoto source={{ uri: image }} />
          ) : (
              <ProfilePhoto source={require('../../../assets/utilities/upload.png')} />
            )}
          <DescriptionUpload>Upload/Foto de perfil</DescriptionUpload>
        </UploadImage>
        <InputContainer>
          <Input onChangeText={(name) => this.setState({ name })} value={name} placeholder="Nome" />
          <Input
            onChangeText={(email) => this.setState({ email })}
            value={email}
            placeholder="E-mail"
          />
          <Input
            onChangeText={(password) => this.setState({ password })}
            value={password}
            placeholder="Senha"
          />
          <Input
            onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
            value={confirmPassword}
            placeholder="Confirmar senha"
          />
        </InputContainer>
        <DefaultButton navigation={this.props.navigation} routeName="SignUp2" />
      </Container>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  handlePickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
}
