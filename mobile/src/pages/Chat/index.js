import React, { Component } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import {
  Container,
  Title,
  Swipe,
  ChatContainer,
  ChatTitle,
  ChatSubtitle,
  ChatDescription,
  ChatTime,
  Ball,
} from './styles';

import Header from '../../components/Header';
import json from '../../../balcao.json';
import Button from '../../components/Button';

export default class Chat extends Component {
  state = {
    list: [],
  }

  componentDidMount() {
    const list = json.balcao.profissionais;

    this.setState({ list });
  }

  renderList = (item) => {
    const { navigation } = this.props;
    return (
      <ChatContainer onPress={() => navigation.navigate('Talk')}>
        <ChatSubtitle>{item.subtitle}</ChatSubtitle>
        <ChatTitle>{item.title}</ChatTitle>
        <ChatDescription>{item.description}</ChatDescription>
        <ChatTime>1h atrás</ChatTime>
      </ChatContainer>
    );
  }

  renderSwipe = (item) => {
    return (
      <Swipe source={require('../../assets/utilities/left.png')}>
        <Ball />
      </Swipe>
    );
  }

  render() {
    const { list } = this.state;

    return (
      <>
        <Header>
          <Title>balcão Online</Title>
        </Header>
        <Container>
          <SwipeListView
            style={{ marginBottom: 20 }}
            data={list}
            renderItem={({ item }) => this.renderList(item)}
            renderHiddenItem={({ item }) => this.renderSwipe(item)}
            leftOpenValue={65}
            keyExtractor={item => item.id}
          />
          <Button bgColor="#FCC419" Texto="Canal de Denuncia" navigation={this.props.navigation} routeName="Talk" />
        </Container>
      </>
    );
  }
}
