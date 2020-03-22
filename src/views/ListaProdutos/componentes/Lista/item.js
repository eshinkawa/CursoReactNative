import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  FONT_SIZE_14,
  FONT_FAMILY_SEMI_BOLD,
  FONT_SIZE_SMALL,
} from '../../../../styles/tipografia';
import {useNavigation} from '@react-navigation/native';

const Item = ({descricao, imagem}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetalhesProduto')}
      style={styles.containerItem}>
      <Image source={imagem} style={{height: 84}} resizeMode="contain" />
      <Text style={styles.texto}>{descricao}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    height: 168,
    backgroundColor: 'white',
    elevation: 1,
    flex: 0.5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  texto: {
    marginTop: 8,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: FONT_SIZE_SMALL,
    color: '#848486',
  },
});

export default Item;
