import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {FONT_FAMILY_REGULAR, FONT_SIZE_16} from '../styles/tipografia';

const Botao = ({width = 200, titulo, icone = true, onPressButton}) => {
  const icon = require(`../assets/images/icone-cubo.png`);
  return (
    <TouchableOpacity onPress={onPressButton}>
      <View style={{alignItems: 'center', marginTop: 16}}>
        <View style={[styles.container, {width}]}>
          {icone && <Image
            source={icon}
            style={{width: 24, height: 24, marginRight: 8}}
          />}
          <Text style={styles.texto}>{titulo}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 200,
    backgroundColor: '#B99DB7',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_16,
    color: '#fff',
  },
});

export default Botao;
