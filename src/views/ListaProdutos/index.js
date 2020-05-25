import React from 'react';
import {SafeAreaView} from 'react-native';
import Cabecalho from './componentes/Cabecalho';
import Lista from './componentes/Lista';

const ListaProdutos = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Cabecalho />
      <Lista />
    </SafeAreaView>
  );
};

export default ListaProdutos;
