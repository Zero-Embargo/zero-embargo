import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Container, Ilustration, Input } from './styles';

import DefaultButton from '../../../components/DefaultButtonBlue';

export default class SignUp2 extends Component {
  state = {
    cpf: '',
  };

  render() {
    const { cpf } = this.state;
    const { navigation } = this.props;
    return (
      <Container>
        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.9}>
          <Feather name="arrow-left" size={35} color="#11969f" />
        </TouchableOpacity>
        <Ilustration
          resizeMode="contain"
          source={require('../../../assets/images/ilustrations/ilustrationcpf.png')}
        />
        <Input
          onChangeText={(cpf) => this.setState({ cpf })}
          value={cpf}
          placeholder="000.000.000-00"
        />
        <DefaultButton navigation={navigation} routeName="Home" />
      </Container>
    );
  }
}
