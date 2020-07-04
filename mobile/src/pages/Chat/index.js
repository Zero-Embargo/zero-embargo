import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Container, Title } from './styles';

import Header from '../../components/Header';
import json from '../../../balcao.json';

export default class Chat extends Component {
  state = {
    list: [],
  }

  componentDidMount() {
    const response = json.balcao.profissionais;

    this.setState({ list: response });
  }

  renderItem = (item) => {
    return (

    );
  }
  render() {
    return (
      <>
        <Header>
          <Feather name="arrow-left" size={32} color="#FFF" />
          <Title>balcão Online</Title>
        </Header>
        <Container>
          <FlatList
            data={list}
            renderItem={({ item }) => this.renderItem(item)}
            keyExtractor={item => item.id}
          />
        </Container>
      </>
    );
  }
}
