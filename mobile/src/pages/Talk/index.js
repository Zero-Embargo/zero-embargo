import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {
  Container,
  BackButton,
  DescriptionContact,
  Data,
  NameContact,
  ContactFunction,
  ProfileContact,
  Footer,
  InputContainer,
  Input,
  SendButton,
  SendButtonText,
  ChatDescription,
  ChatBallonGreen,
  ChatBallonBlue,
  ChatBallonText,
} from './styles';

import Header from '../../components/Header';

export default class Talk extends Component {
  state = {
    chating: '',
    texto: ''
  }

  handleSend = () => {
    const { chating } = this.state;

    this.setState({ texto: chating });

    Keyboard.dismiss();

    this.setState({ chating: '' });
  }

  render() {
    const { navigation } = this.props;
    const { chating, texto } = this.state;
    return (
      <>
        <Header>
          <BackButton onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={32} color="#fff" />
          </BackButton>
          <ContactFunction>Fiscal de Obras</ContactFunction>
          <DescriptionContact>
            <ProfileContact source={require('../../assets/utilities/profile.png')} />
            <NameContact>Davilson Junior</NameContact>
            <Data>30/06/2020</Data>
          </DescriptionContact>
        </Header>
        <Container>
          <ChatDescription>
            <ChatBallonGreen style={{ marginTop: 20 }}>
              <ChatBallonText>Olá, bom dia! Blz?</ChatBallonText>
            </ChatBallonGreen>

            <ChatBallonBlue>
              <ChatBallonText>Boa tarde, João! Em que posso
ajudar?</ChatBallonText>
            </ChatBallonBlue>

            <ChatBallonGreen>
              <ChatBallonText>Gostaria de agendar um
atendimento no balcão</ChatBallonText>
            </ChatBallonGreen>

            <ChatBallonBlue>
              <ChatBallonText>Perfeito! Quais os serviços que
necessita que seja prestado?</ChatBallonText>
            </ChatBallonBlue>

            {texto !== '' &&
              <ChatBallonGreen>
                <ChatBallonText>{texto}</ChatBallonText>
              </ChatBallonGreen>
            }

          </ChatDescription>
          <Footer>
            <InputContainer>
              <Input
                placeholderTextColor="gray"
                placeholder="Digite aqui"
                value={chating}
                onChangeText={(chating) => {
                  this.setState({ chating });
                }} />
              <SendButton onPress={this.handleSend}>
                <SendButtonText>
                  Enviar
                </SendButtonText>
              </SendButton>
            </InputContainer>
          </Footer>

        </Container>
      </>
    );
  }
}
