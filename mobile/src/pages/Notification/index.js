import React, { Component } from 'react';
import { FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Feather, Fontisto, MaterialIcons } from '@expo/vector-icons';
import { SwipeListView } from 'react-native-swipe-list-view';

import {
  Container,
  Professionals,
  HeaderDescription,
  ChatContainer,
  ChatTitle,
  ChatDescription,
  ChatTime,
  Swipe,
  Ball,
  Notification,
  DescContainer,
  CaixaEntrada,
  Entrada,
  EntradaText,
  Arquivo,
  ArquivoText,
} from './styles';

import json from '../../../balcao.json';

export default class ListProfile extends Component {
  state = {
    list: [],
  };

  componentDidMount() {
    const list = json.balcao.notification;

    this.setState({ list });
  }

  renderList = (item) => {
    return (
      <ChatContainer>
        <Notification>
          <Fontisto name="email" size={40} color="#4A4A4A" />
          <DescContainer>
            <ChatTitle>{item.title}</ChatTitle>
            <ChatDescription>{item.subtitle}</ChatDescription>
          </DescContainer>
          <MaterialIcons name="keyboard-arrow-right" size={30} color="#4A4A4A" />
        </Notification>
        <ChatTime>1h atrás</ChatTime>
      </ChatContainer>
    );
  };

  renderSwipe = (item) => {
    return (
      <Swipe source={require('../../assets/utilities/left.png')}>
        <Ball />
      </Swipe>
    );
  };

  render() {
    const { list } = this.state;
    const { navigation } = this.props;
    return (
      <Container>
        <HeaderDescription>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 30, height: 30 }}>
            <Feather name="arrow-left" size={30} color="#FFF" />
          </TouchableOpacity>
          <Professionals>Notificações</Professionals>
        </HeaderDescription>
        <CaixaEntrada>
          <Entrada>
            <EntradaText>Caixa de Entrada</EntradaText>
          </Entrada>
          <Arquivo>
            <ArquivoText>Arquivo</ArquivoText>
          </Arquivo>
        </CaixaEntrada>
        <SwipeListView
          style={{ marginBottom: 20 }}
          data={list}
          renderItem={({ item }) => this.renderList(item)}
          renderHiddenItem={({ item }) => this.renderSwipe(item)}
          leftOpenValue={65}
          keyExtractor={(item) => item.id}
        />
      </Container>
    );
  }
}
