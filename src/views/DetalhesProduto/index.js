import React from 'react';
import {
  TouchableOpacity,
  Image,
  Dimensions,
  View,
  Text,
  ImageBackground,
  Button,
} from 'react-native';
import {Sacola, Botao} from '../../componentes';
import {useNavigation} from '@react-navigation/native';

export const DetalhesProduto = () => {
  const imgSrc = require('../../assets/images/bgimage.png');
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 2}}>
        <ImageBackground
          resizeMode="cover"
          source={imgSrc}
          style={{width: Dimensions.get('window').width, height: '100%'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 24,
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../../assets/images/flecha-esquerda.png')}
                style={{width: 24, height: 24}}
              />
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: 'white',
                padding: 18,
                borderBottomLeftRadius: 30,
                borderTopLeftRadius: 30,
                elevation: 3,
                marginRight: -24,
                marginTop: -10,
              }}>
              <Sacola />
            </View>
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          flex: 1,
          marginTop: -60
        }}>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row'
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 30,
              padding: 32,
              width: '88%',
              elevation: 4
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text>Jim&Jill Designs</Text>
                <Text>Wilson</Text>
                <Text>Table Lamp</Text>
              </View>

              <Image
                source={require('../../assets/images/detalhes-table-lamp.png')}
                style={{width: 24, height: 60}}
              />
            </View>
            <View>
              <Text>
                Jim&Kill Designs created a master piece called Wilson. It's a
                dream lamp for any chic office out there
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Text>$92</Text>
              <Botao titulo="DETAILS" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

//Jim&Jill Designs Wilson Table Lamp Jim&Kill Designs created a master piece called Wilson. It's a dream lamp for any chic office out there $92
