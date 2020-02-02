import React from 'react';
import {ScrollView} from 'react-native';
import { Cabecalho, Lista } from './componentes';

export const ListaProdutos = () => {
  return (
    <ScrollView>
      <Cabecalho />
      <Lista />
    </ScrollView>
  );
};
