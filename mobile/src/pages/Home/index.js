import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {
  Container,
  Header,
  FollowProfile,
  Profile,
  Search,
  InputSearch,
  Input,
  UserText,
  LogoGrayContainer,
  LogoGray,
  Content,
  Title,
  Grid,
  GridHeader,
  Grids,
  GridTitle,
  GridImage,
} from './styles';

export default class Home extends Component {
  state = {
    search: '',
    data: [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      {
        id: 4,
      },
    ],
  };

  render() {
    const { data } = this.state;
    return (
      <Container source={require('../../assets/utilities/background.jpg')}>
        <Header>
          <FollowProfile>
            <Profile source={require('../../assets/utilities/profileuser.png')} />
          </FollowProfile>

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
            <FontAwesome style={{ padding: 12 }} name="search" size={24} color="#11969f" />
            <Input
              placeholderTextColor="#11969f"
              placeholder="pesquisar"
              onChangeText={(search) => {
                this.setState({ search });
              }}
              underlineColorAndroid="transparent"
            />
          </InputSearch>
        </Header>
        <UserText>Profissional</UserText>
        <LogoGrayContainer>
          <LogoGray resizeMode="contain" source={require('../../assets/utilities/logoGray.png')} />
        </LogoGrayContainer>

        <Content>
          <Title>Principais</Title>
          <Grids showsVerticalScrollIndicator={false}>
            <GridHeader>
              <Grid
                style={{
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 6,
                  },
                  shadowOpacity: 0.39,
                  shadowRadius: 8.3,

                  elevation: 13,
                }}>
                <GridTitle>Cronograma de Higienização</GridTitle>
                <GridImage
                  resizeMode="contain"
                  source={require('../../assets/images/ilustrations/cronograma.png')}
                />
              </Grid>

              <Grid>
                <GridTitle>Canal de Denúncias</GridTitle>
                <GridImage
                  resizeMode="contain"
                  source={require('../../assets/images/ilustrations/canal.png')}
                />
              </Grid>
            </GridHeader>

            <GridHeader>
              <Grid>
                <GridTitle>Agendamentos</GridTitle>
                <GridImage
                  resizeMode="contain"
                  source={require('../../assets/images/ilustrations/agenda.png')}
                />
              </Grid>

              <Grid>
                <GridTitle>Balcão Online</GridTitle>
                <GridImage
                  resizeMode="contain"
                  source={require('../../assets/images/ilustrations/balcao.png')}
                />
              </Grid>
            </GridHeader>
          </Grids>
        </Content>
      </Container>
    );
  }
}
