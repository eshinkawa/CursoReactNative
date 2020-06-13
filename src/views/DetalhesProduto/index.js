import React from 'react';
import {View, StyleSheet} from 'react-native';

import DescricaoItem from './componentes/DescricaoItem';
import Background from './componentes/Background';

const DetalhesProduto = ({route}) => {
  const {imagem, estudio, itemDesc, itemName, titulo, preco} = route.params;

  return (
    <View style={styles.container}>
      <Background />
      <DescricaoItem
        imagem={imagem}
        estudio={estudio}
        itemDesc={itemDesc}
        itemName={itemName}
        titulo={titulo}
        preco={preco}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DetalhesProduto;
