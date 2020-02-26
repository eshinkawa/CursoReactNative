import React from 'react';
import {
  TouchableOpacity,
  Image,
  Dimensions,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import {Sacola, Botao} from '../../componentes';
import {useNavigation} from '@react-navigation/native';
import {
  FONT_FAMILY_REGULAR,
  FONT_SIZE_14,
  FONT_SIZE_16,
  FONT_FAMILY_BOLD,
  FONT_SIZE_20,
} from '../../styles/tipografia';

export const DetalhesProduto = () => {
  const imgSrc = require('../../assets/images/bgimage.png');
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1.5}}>
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
          marginTop: -60,
        }}>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 30,
              padding: 28,
              width: '80%',
              elevation: 4,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text
                  style={{
                    fontFamily: FONT_FAMILY_BOLD,
                    fontSize: FONT_SIZE_16,
                    marginBottom: 4,
                  }}>
                  Jim&Jill Designs
                </Text>
                <Text
                  style={{
                    fontFamily: FONT_FAMILY_BOLD,
                    fontSize: FONT_SIZE_20,
                    marginBottom: 4,
                  }}>
                  Wilson
                </Text>
                <Text
                  style={{
                    fontFamily: FONT_FAMILY_REGULAR,
                    fontSize: FONT_SIZE_14,
                    color: '#CACACA',
                    marginBottom: 12,
                  }}>
                  Table Lamp
                </Text>
              </View>

              <Image
                source={require('../../assets/images/detalhes-table-lamp.png')}
                style={{width: 30, height: 72}}
              />
            </View>
            <View>
              <Text
                style={{
                  fontFamily: FONT_FAMILY_REGULAR,
                  fontSize: FONT_SIZE_14,
                  color: '#ACAAAB',
                }}>
                Jim&Kill Designs created a master piece called Wilson. It's a
                dream lamp for any chic office out there.
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: FONT_FAMILY_BOLD,
                  fontSize: 22,
                  marginTop: 10,
                }}>
                $92,00
              </Text>
              <Botao titulo="DETAILS" icone={false} width={140} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

//Jim&Jill Designs Wilson Table Lamp Jim&Kill Designs created a master piece called Wilson. It's a dream lamp for any chic office out there $92
