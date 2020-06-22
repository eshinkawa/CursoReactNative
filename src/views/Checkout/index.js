import React, {useContext} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {DataContext} from '../../provider';
import CheckoutItem from './checkoutItem';
import {numberFormat} from '../../utils';
import Botao from '../../componentes/Botao';
import {
  FONT_FAMILY_SEMI_BOLD,
  FONT_SIZE_XX_LARGE,
  FONT_SIZE_LARGE,
  FONT_FAMILY_BOLD,
  FONT_SIZE_SMALL,
} from '../../styles/tipografia';
import {useNavigation} from '@react-navigation/native';
import {COR_BOTAO_ACAO} from '../../styles/cores';

const Checkout = () => {
  const {itensCheckout} = useContext(DataContext);
  const navigation = useNavigation();

  const valorTotal = itensCheckout.reduce(
    (acumulado, atual) => acumulado + atual.quantidade * atual.preco,
    0,
  );
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Checkout</Text>
      {itensCheckout.map(item => (
        <CheckoutItem {...item} key={item.id} />
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
    </View>
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
    fontSize: FONT_SIZE_SMALL,
    fontFamily: FONT_FAMILY_BOLD,
    color: COR_BOTAO_ACAO,
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
