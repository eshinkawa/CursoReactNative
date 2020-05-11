import React from 'react';
import {SafeAreaView} from 'react-native';
import Cabecalho from './componentes/Cabecalho';
import Lista from './componentes/Lista';
import Botao from '../../componentes/Botao';

const ListaProdutos = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Cabecalho />
      <Lista />
    </SafeAreaView>
  );
};

export default ListaProdutos;
