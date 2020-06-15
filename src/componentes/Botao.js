import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FONT_SIZE_16, FONT_FAMILY_SEMI_BOLD} from '../styles/tipografia';
import {WHITE, COR_BOTAO_ACAO} from '../styles/cores';

const Botao = ({width = 200, titulo, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.posicao}>
        <View style={[styles.container, {width}]}>
          <Text style={styles.texto}>{titulo}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 160,
    backgroundColor: COR_BOTAO_ACAO,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  posicao: {
    alignItems: 'center',
    marginTop: 16,
  },
  texto: {
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: FONT_SIZE_16,
    color: WHITE,
  },
});

export default Botao;
