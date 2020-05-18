import React from 'react';
import {View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Sacola from '../../../../componentes/Sacola';

const DescricaoItem = ({imgSrc, navigation}) => {
  return (
    <View style={styles.imagemContainer}>
      <ImageBackground
        resizeMode="cover"
        source={imgSrc}
        style={styles.imagemFundo}>
        <View style={styles.setaContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../../../assets/images/flecha-esquerda.png')}
              style={styles.imagemSeta}
            />
          </TouchableOpacity>
          <View style={styles.sacolaContainer}>
            <Sacola />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DescricaoItem;
