import React, { Component } from 'react';
import { FontAwesome, Entypo } from '@expo/vector-icons';

import {
  Container,
  PointsText,
  ProfileView,
  ProfilePhoto,
  ProfileName,
  Profession,
  ProfileDescription,
  Text,
} from './styles';

export default class Profile extends Component {
  render() {
    return (
      <Container>
        <PointsText>1752 pontos</PointsText>
        <ProfileView>
          <ProfilePhoto source={require('../../assets/utilities/perfil.png')} />
          <ProfileName>João Santos</ProfileName>
          <Profession>Profissional</Profession>
        </ProfileView>
        <ProfileDescription>
          <FontAwesome name="user" size={26} color="#fff" />
          <Text>Editar Perfil</Text>
          <FontAwesome name="long-arrow-right" size={26} color="#fff" />
        </ProfileDescription>

        <ProfileDescription>
          <FontAwesome name="calendar-o" size={26} color="#fff" />
          <Text>Agendamentos</Text>
          <FontAwesome name="long-arrow-right" size={26} color="#fff" />
        </ProfileDescription>

        <ProfileDescription>
          <FontAwesome name="exclamation-triangle" size={26} color="#fff" />
          <Text>Lembretes</Text>
          <FontAwesome name="long-arrow-right" size={26} color="#fff" />
        </ProfileDescription>

        <ProfileDescription>
          <FontAwesome name="heart" size={26} color="#fff" />
          <Text>Favoritos</Text>
          <FontAwesome name="long-arrow-right" size={26} color="#fff" />
        </ProfileDescription>

        <ProfileDescription>
          <Entypo name="emoji-happy" size={26} color="#fff" />
          <Text>Duvidas</Text>
          <FontAwesome name="long-arrow-right" size={26} color="#fff" />
        </ProfileDescription>
      </Container>
    );
  }
}
