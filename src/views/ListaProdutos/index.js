import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Cabecalho from './componentes/Cabecalho';
import Lista from './componentes/Lista';

const ListaProdutos = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <Cabecalho />
      <Lista />
    </ScrollView>
  );
};

export default ListaProdutos;
