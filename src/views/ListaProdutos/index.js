import React from 'react';
import {ScrollView} from 'react-native';
import Cabecalho from './componentes/Cabecalho';
import Lista from './componentes/Lista';
import Botao from '../../componentes/Botao';

const ListaProdutos = () => {
  return (
    <ScrollView contentContainerStyle={{paddingBottom: 36}}>
      <Cabecalho />
      <Lista />
    </ScrollView>
  );
};

export default ListaProdutos;
