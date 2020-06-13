import React from 'react';
import {View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import Sacola from '../../../../componentes/Sacola';

const Background = () => {
  const imgSrc = require('../../../../assets/images/bgimg.jpg');
  const navigation = useNavigation();

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
          <Sacola />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Background;
