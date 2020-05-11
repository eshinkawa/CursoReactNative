import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';

const Cabecalho = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/images/icone-menu.png')}
        style={styles.iconeMenu}
      />
      <Text style={styles.titulo}>LightAR</Text>
      <View style={styles.containerSacola}>
        <Image
          source={require('../../../../assets/images/icone-sacola.png')}
          style={styles.iconeSacola}
        />
      </View>
    </View>
  );
};

export default Cabecalho;
