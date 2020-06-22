import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  FONT_FAMILY_SEMI_BOLD,
  FONT_SIZE_SMALL,
} from '../../../../styles/tipografia';
import {useNavigation} from '@react-navigation/native';
import {WHITE} from '../../../../styles/cores';

const Item = ({imagem, estudio, titulo, itemDesc, itemName, preco, id}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.push('DetalhesProduto', {
          imagem,
          estudio,
          itemDesc,
          titulo,
          itemName,
          preco,
          id,
        })
      }
      style={styles.containerItem}>
      <Image source={imagem} style={styles.imagem} resizeMode="contain" />
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    height: 168,
    backgroundColor: WHITE,
    elevation: 1,
    flex: 1,
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
  imagem: {height: 84},
});

export default Item;
