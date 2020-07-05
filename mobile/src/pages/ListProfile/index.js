import React, { Component } from 'react';
import { FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  SearchContainer,
  InputSearch,
  Input,
  Content,
  Title,
  Professionals,
  HeaderDescription,
  List,
  ListItem,
  ListImage,
  ListDescription,
  Profission,
  NameProfessional,
  LocationDescription,
  Location,
  Neighborhood,
  RatingDescription,
  RatingText,
  NumberContact,
  FooterList,
  RatingImage,
  FooterDescription,
} from './styles';

import json from '../../../balcao.json';

export default class ListProfile extends Component {
  state = {
    search: '',
    list: [],
    heart: [],
  };

  componentDidMount() {
    const list = json.balcao.listageral;

    this.setState({ list });
  }

  handleHeart = (id) => {
    const { heart } = this.state;
    if (heart.includes(id)) {
      const newHeart = heart.filter((num) => num != id);
      this.setState({ heart: newHeart });
    } else {
      this.setState({ heart: [...heart, id] });
    }
  };

  renderList = (item) => {
    const { navigation } = this.props;
    const { heart } = this.state;
    return (
      <List>
        <ListItem>
          <ListImage
            resizeMode="contain"
            source={require('../../assets/utilities/listageral.png')}
          />
          <ListDescription>
            <Profission>{item.profissao}</Profission>
            <NameProfessional>{item.name}</NameProfessional>
            <LocationDescription>
              <Location>
                <MaterialIcons name="location-on" size={20} color="black" />
                <Neighborhood>{item.bairro}</Neighborhood>
              </Location>
              <RatingDescription>
                <MaterialIcons name="work" size={20} color="black" />
                <RatingText>52 Avaliações</RatingText>
              </RatingDescription>
              <TouchableOpacity onPress={() => this.handleHeart(item.id)}>
                <FontAwesome
                  name={heart.includes(item.id) ? 'heart' : 'heart-o'}
                  size={30}
                  color="#F8444F"
                />
              </TouchableOpacity>
            </LocationDescription>
            <NumberContact>{item.numero}</NumberContact>
            <FooterList>
              <RatingImage
                resizeMode="contain"
                source={require('../../assets/utilities/rating.png')}
              />
              <FooterDescription>Pontos de Reputação: 582</FooterDescription>
            </FooterList>
          </ListDescription>
        </ListItem>
      </List>
    );
  };

  render() {
    const { search, list } = this.state;
    const { navigation } = this.props;
    return (
      <Container>
        <HeaderDescription>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 30, height: 30 }}>
            <Feather name="arrow-left" size={30} color="#FFF" />
          </TouchableOpacity>
          <Professionals>Profissionais Locais</Professionals>
        </HeaderDescription>
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%' }}>
          <SearchContainer>
            <InputSearch
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              }}>
              <FontAwesome style={{ padding: 12 }} name="search" size={24} color="#2DB398" />
              <Input
                placeholderTextColor="#2DB398"
                placeholder="Pesquisar"
                onChangeText={(search) => {
                  this.setState({ search });
                }}
                underlineColorAndroid="transparent"
              />
            </InputSearch>
          </SearchContainer>

          <Content>
            <Title>Lista Geral</Title>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={list}
              renderItem={({ item }) => this.renderList(item)}
              keyExtractor={(item) => item.id}
            />
          </Content>
        </ScrollView>
      </Container>
    );
  }
}
