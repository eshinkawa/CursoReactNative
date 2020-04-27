import React, { useState } from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import Sacola from '../../componentes/Sacola';
import Botao from '../../componentes/Botao';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';

const DetalhesProduto = () => {
  const imgSrc = require('../../assets/images/bgimage.png');
  const navigation = useNavigation();
  const [detalhes, setDetalhes] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.imagemContainer}>
        <ImageBackground
          resizeMode="cover"
          source={imgSrc}
          style={styles.imagemFundo}>
          <View
            style={styles.setaContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../../assets/images/flecha-esquerda.png')}
                style={styles.imagemSeta}
              />
            </TouchableOpacity>
            <View
              style={styles.sacolaContainer}>
              <Sacola />
            </View>
          </View>
        </ImageBackground>
      </View>
      <View
        style={styles.itemContainer}>
        <View
          style={styles.itemPosicao}>
          <View
            style={styles.item}>
            <View
              style={styles.textoPosicao}>
              <View>
                <Text
                  style={styles.textoSuperior}>
                  Jim&Jill Designs
                </Text>
                <Text
                  style={styles.textoMedio}>
                  Wilson
                </Text>
                <Text
                  style={styles.textoInferior}>
                  Table Lamp
                </Text>
              </View>

              <Image
                source={require('../../assets/images/detalhes-table-lamp.png')}
                style={styles.imagemItem}
              />
            </View>
            {detalhes && <View>
              <Text
                style={styles.textoDescricao}>
                Jim&Kill Designs created a master piece called Wilson. It's a
                dream lamp for any chic office out there.
              </Text>
            </View>}
            <View
              style={styles.rodape}>
              <Text
                style={styles.moeda}>
                $92,00
              </Text>
              <Botao titulo="Show More" icone={false} width={140} onPressButton={() => {setDetalhes(!detalhes)}}/>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetalhesProduto;