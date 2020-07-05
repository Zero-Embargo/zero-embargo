import React, { Component } from 'react';

import {
  Container,
  Content,
  Title,
  Grids,
  GridHeader,
  Grid,
  GridTitle,
  GridImage,
  Logo,
} from './styles';

export default class Management extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Logo source={require('../../assets/utilities/logoBlack.png')} />
        <Content>
          <Title>O que Procura?</Title>
          <Grids showsVerticalScrollIndicator={false}>
            <GridHeader>
              <Grid
                onPress={() => navigation.navigate('ListProfile')}
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
                <GridTitle>Profissionais</GridTitle>
                <GridImage
                  resizeMode="contain"
                  source={require('../../assets/images/ilustrations/profissionais.png')}
                />
              </Grid>

              <Grid>
                <GridTitle>Fornecedores</GridTitle>
                <GridImage
                  resizeMode="contain"
                  source={require('../../assets/images/ilustrations/fornecedores.png')}
                />
              </Grid>
            </GridHeader>
          </Grids>
        </Content>
      </Container>
    );
  }
}
