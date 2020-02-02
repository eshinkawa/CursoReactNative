import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import { FONT_FAMILY_REGULAR, FONT_SIZE_14, FONT_SIZE_24, FONT_SIZE_12, FONT_SIZE_16, FONT_FAMILY_SEMI_BOLD } from '../../../../styles/tipografia';

export const Item = ({descricao, imagem}) => {
  return (
    <View style={styles.containerItem}>
      <Image source={imagem} style={{height:84}} resizeMode="contain"/>
      <Text style={styles.texto}>{descricao}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    height: 168,
    backgroundColor: 'white',
    elevation: 4,
    flex: 0.5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  texto: {
    marginTop: 8,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: FONT_SIZE_14,
    color: "#848486"
  }
});
