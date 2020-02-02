import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';

export const Cabecalho = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/images/icon-menu.png')}
        style={styles.iconeMenu}
      />
      <Text style={styles.titulo}>LightAR</Text>
      <View style={styles.containerSacola}>
        <Image
          source={require('../../../../assets/images/icon-bag.png')}
          style={styles.iconeSacola}
        />
      </View>
    </View>
  );
};
