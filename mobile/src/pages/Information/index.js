import React, { Component, useState } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import ButtonAdvance from '../../components/ButtonAdvance';
console.disableYellowBox = true;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  container: {
    justifyContent: 'center',
  },
  slide: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  ilustration: {
    width: '100%',
    marginTop: 60,
  },
  header: {
    width: '100%',
    height: 65,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  nextText: {
    fontSize: 16,
    color: '#11969F',
  },
  descriptionContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    color: '#4A4A4A',
    fontWeight: 'bold',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#999999',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
});

class DotBall extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#4A4A4A',
          width: 8,
          height: 8,
          borderRadius: 4,
          marginLeft: 3,
          marginRight: 3,
          marginTop: 3,
          marginBottom: 3,
        }}
      />
    );
  }
}

class DotBallActive extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#11969F',
          width: 16,
          height: 16,
          borderRadius: 10,
          marginLeft: 3,
          marginRight: 3,
          marginTop: 3,
          marginBottom: 3,
        }}
      />
    );
  }
}

export default class SwiperComponent extends Component {
  state = {
    bgColor: '#11969f',
    Texto: 'Pular',
    bgColorIcon: '#FFF',
  };
  render() {
    const { bgColor, Texto, bgColorIcon } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.wrapper}>
        <Swiper showsButtons={false} loop={false} dot={<DotBall />} activeDot={<DotBallActive />}>
          <View style={styles.slide}>
            <ButtonAdvance
              bgColor={bgColor}
              Texto={Texto}
              bgColorIcon={bgColorIcon}
              navigation={navigation}
            />
            <Image
              resizeMode="contain"
              style={styles.ilustration}
              source={require('../../assets/images/ilustrations/ilustration1.png')}
            />
            <View style={styles.descriptionContainer}>
              <Text style={styles.title}>Consulte o ZE!</Text>
              <Text style={styles.description}>
                O Zero Embargo te ajuda a implementar os procedimentos de higienização, além de
                auxiliar na gestão da sua obra do inicio ao fim. Com o ZE, a gente não para, mas
                permanece com saude.
              </Text>
            </View>
          </View>

          <View style={styles.slide}>
            <ButtonAdvance
              bgColor={bgColor}
              Texto={Texto}
              bgColorIcon={bgColorIcon}
              navigation={navigation}
            />
            <Image
              resizeMode="contain"
              style={styles.ilustration}
              source={require('../../assets/images/ilustrations/ilustration2.png')}
            />
            <View style={styles.descriptionContainer}>
              <Text style={styles.title}>Avisamos tudo!</Text>
              <Text style={styles.description}>
                Deixa com o ZE! Sabemos tudo que precisa sobre os procedimentos de higienização, e
                vamos te alertar sobre todos os cuidados sempre que for necessário. Você e seus
                colaboradores estarão bem para a proxima obra no que depender do ZE.
              </Text>
            </View>
          </View>

          <View style={styles.slide}>
            <ButtonAdvance
              bgColor={bgColor}
              Texto={Texto}
              bgColorIcon={bgColorIcon}
              navigation={navigation}
            />
            <Image
              resizeMode="contain"
              style={styles.ilustration}
              source={require('../../assets/images/ilustrations/ilustration3.png')}
            />
            <View style={styles.descriptionContainer}>
              <Text style={styles.title}>Quer comprar com segurança?</Text>
              <Text style={styles.description}>
                O ZE te fala onde e quem são os estabelecimentos que respeitam e zelam por uma
                sociedade onde o virus não tem vez.
              </Text>
            </View>
          </View>

          <View style={styles.slide}>
            <ButtonAdvance
              bgColor={bgColor}
              Texto={Texto}
              bgColorIcon={bgColorIcon}
              navigation={navigation}
            />
            <Image
              resizeMode="contain"
              style={styles.ilustration}
              source={require('../../assets/images/ilustrations/ilustration4.png')}
            />
            <View style={styles.descriptionContainer}>
              <Text style={styles.title}>Como irão saber se me preocupo com meus clientes?</Text>
              <Text style={styles.description}>
                O ZE já cuidou disso pra você. Temos um sistema de avaliações onde cada avaliação
                gera pontos e estes pontos te posiciona dentro da sua categoria, esses pontos de
                reputação pode ser consultado a qualquer momento.
              </Text>
            </View>
          </View>

          <View style={styles.slide}>
            <ButtonAdvance
              bgColor={bgColor}
              Texto={Texto}
              bgColorIcon={bgColorIcon}
              navigation={navigation}
            />
            <Image
              resizeMode="contain"
              style={styles.ilustration}
              source={require('../../assets/images/ilustrations/ilustration5.png')}
            />
            <View style={styles.descriptionContainer}>
              <Text style={styles.title}>Não sou profissional, o ZE me ajuda?</Text>
              <Text style={styles.description}>
                Sim! o ZE lembrou de você. Queremos você seguro também, portanto poderá consultar e
                mapear a forma mais segura de fazer sua obra e ainda gerir de forma simples e
                rapida.
              </Text>
            </View>
          </View>

          <View style={styles.slide}>
            <ButtonAdvance
              bgColor={bgColor}
              Texto={Texto}
              bgColorIcon={bgColorIcon}
              navigation={navigation}
            />
            <Image
              resizeMode="contain"
              style={styles.ilustration}
              source={require('../../assets/images/ilustrations/ilustration6.png')}
            />
            <View style={styles.descriptionContainer}>
              <Text style={styles.title}>ZE também traz o balcão online</Text>
              <Text style={styles.description}>
                O ZE sabe que não adianta nada estar seguro em uma obra e enfrentar umbalcão lotado
                pra resolver a documentação nas prefeituras, por isso, o ZE acabou com a distância
                entre contribuinte, comércio, profissional e prefeitura.
              </Text>
            </View>
          </View>
        </Swiper>
      </View>
    );
  }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent);
