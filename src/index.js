import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ListaProdutos} from './views/ListaProdutos';
import {COR_DE_FUNDO} from './styles/cores';

const App = () => {
  return (
    <View style={styles.container}>
      <ListaProdutos />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COR_DE_FUNDO
  },
});

export default App;
