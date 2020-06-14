import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {FONT_SIZE_16, FONT_FAMILY_SEMI_BOLD} from '../styles/tipografia';

const Botao = ({width = 200, titulo, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{alignItems: 'center', marginTop: 16}}>
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
    backgroundColor: '#2174FF',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: FONT_SIZE_16,
    color: '#fff',
  },
});

export default Botao;
