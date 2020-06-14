import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {numberFormat} from '../../utils';
import {
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_LIGHT,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_SMALL,
  FONT_FAMILY_SEMI_BOLD,
} from '../../styles/tipografia';

const CheckoutItem = ({
  estudio,
  itemName,
  titulo,
  imagem,
  preco,
  quantidade,
}) => {
  return (
    <View style={styles.containerItem}>
      <View style={styles.imagemContainer}>
        <Image source={imagem} style={styles.imagem} />
      </View>
      <View style={styles.descContaner}>
        <Text style={styles.descTextoSuperior}>{itemName}</Text>
        <Text style={styles.descTextoInferior}>{titulo}</Text>
      </View>

      <View style={styles.precoContainer}>
        <Text style={styles.precoTexto}>{numberFormat(preco)}</Text>
        <Text style={styles.precoTexto}>Qtd: {quantidade}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  imagemContainer: {
    flex: 1,
    backgroundColor: '#F7F8FC',
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {width: 40, height: 40},
  descContaner: {flex: 2, padding: 18},
  descTextoSuperior: {
    fontSize: FONT_SIZE_MEDIUM,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  descTextoInferior: {
    fontSize: FONT_SIZE_SMALL,
    fontFamily: FONT_FAMILY_LIGHT,
  },
  precoContainer: {
    flex: 1.5,
    padding: 18,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  textoQuantidade: {
    textAlign: 'center',
    padding: 4,
    fontSize: 10,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    color: '#fff',
  },
  precoTexto: {
    fontFamily: FONT_FAMILY_REGULAR,
  },
});

export default CheckoutItem;
