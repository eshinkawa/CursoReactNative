import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from './styles';
import Item from './item';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    titulo: 'Table Lamps',
    imagem: require('../../../../assets/images/01-tablelamps.png')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    titulo: ' Ceiling Lamps',
    imagem: require('../../../../assets/images/02-ceilinglamps.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    titulo: ' Sconces',
    imagem: require('../../../../assets/images/03-sconces.png')
  },
  {
    id: 'bd7acbea-c1b1-462c2-aed5-3ad53abb28ba',
    titulo: 'Floor Lamps',
    imagem: require('../../../../assets/images/04-floorlamps.png')
  },
  {
    id: '3ac68afvvc-c605-48d3-a4f8-fbd91aa97f63',
    titulo: ' Light Decorations',
    imagem: require('../../../../assets/images/05-lightdecor.png')
  },
  {
    id: '58694a0f-3deea1-471f-bd96-145571e29d72',
    titulo: 'Garlands',
    imagem: require('../../../../assets/images/06-garlands.png')
  }
];


const Lista = () => {
  return (
    <View style={styles.container}>
      <View style={styles.separador} />
      <View style={styles.containerTexto}>
        <Text
          style={styles.texto}>
          Categories
        </Text>
      </View>
      <FlatList
        numColumns={2}
        data={DATA}
        renderItem={({ item }) => (
          <Item descricao={item.titulo} imagem={item.imagem}/>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Lista;
