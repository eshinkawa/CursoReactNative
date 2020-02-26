import React from 'react';
import {ScrollView} from 'react-native';
import {Cabecalho, Lista} from './componentes';
import {Botao} from '../../componentes';

export const ListaProdutos = () => {
  return (
    <ScrollView contentContainerStyle={{paddingBottom: 36}}>
      <Cabecalho />
      <Lista />
      <Botao titulo={'AR View'} />
    </ScrollView>
  );
};
