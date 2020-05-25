import React from 'react';
import {View, StyleSheet} from 'react-native';

import DescricaoItem from './componentes/DescricaoItem';
import Background from './componentes/Background';

const DetalhesProduto = () => {
  return (
    <View style={styles.container}>
      <Background />
      <DescricaoItem />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DetalhesProduto;
