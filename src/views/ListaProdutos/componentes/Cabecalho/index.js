import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import Sacola from '../../../../componentes/Sacola';

const Cabecalho = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/images/icone-menu.png')}
        style={styles.iconeMenu}
      />
      <Text style={styles.titulo}>LightAR</Text>
      <View style={styles.containerSacola}>
        <Sacola />
      </View>
    </View>
  );
};

export default Cabecalho;