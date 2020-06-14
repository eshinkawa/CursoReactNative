import React, {useContext} from 'react';
import {SafeAreaView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {DataContext} from '../../provider';
import CheckoutItem from './checkoutItem';
import {numberFormat} from '../../utils';
import Botao from '../../componentes/Botao';
import {
  FONT_FAMILY_SEMI_BOLD,
  FONT_SIZE_XX_LARGE,
  FONT_SIZE_LARGE,
  FONT_SIZE_MEDIUM,
} from '../../styles/tipografia';
import {useNavigation} from '@react-navigation/native';

const Checkout = () => {
  const {itensCheckout} = useContext(DataContext);
  const navigation = useNavigation();

  const valorTotal = itensCheckout.reduce(
    (acumulado, atual) => acumulado + atual.quantidade * atual.preco,
    0,
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Checkout</Text>
      {itensCheckout.map(item => (
        <CheckoutItem {...item} />
      ))}
      <Text style={styles.total}>Total: {numberFormat(valorTotal)}</Text>
      <Botao
        titulo={'FINALIZAR COMPRA'}
        width={'100%'}
        onPress={() => console.log('Comprar!')}
      />
      <TouchableOpacity onPress={() => navigation.push('ListaProdutos')}>
        <Text style={styles.continuarTexto}>Continuar comprando</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
  },
  titulo: {
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: FONT_SIZE_XX_LARGE,
    marginBottom: 16,
  },
  continuarTexto: {
    fontSize: FONT_SIZE_MEDIUM,
    color: '#2174FF',
    marginTop: 20,
    textAlign: 'center',
  },
  total: {
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: FONT_SIZE_LARGE,
    marginVertical: 16,
  },
});

export default Checkout;
