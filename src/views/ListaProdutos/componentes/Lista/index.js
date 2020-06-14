import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from './styles';
import Item from './item';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    titulo: 'Table Lamps',
    imagem: require('../../../../assets/images/01-tablelamps.png'),
    estudio: 'Jim&Jill Designs',
    itemName: 'Wilson',
    preco: 92.1,
    itemDesc:
      'Contrary to popular belief, Lorem Ipsum is not simply random text',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    titulo: 'Ceiling Lamps',
    imagem: require('../../../../assets/images/02-ceilinglamps.png'),
    estudio: 'Gary&Fly Designs',
    itemName: 'Linda',
    preco: 123.44,
    itemDesc:
      'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, lorem ipsum',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    titulo: 'Sconces',
    imagem: require('../../../../assets/images/03-sconces.png'),
    estudio: 'Tom&Jim Designs',
    itemName: 'Jerry',
    preco: 33.43,
    itemDesc:
      'There are many variations of passages of Lorem Ipsum available, but the majority',
  },
  {
    id: 'bd7acbea-c1b1-462c2-aed5-3ad53abb28ba',
    titulo: 'Floor Lamps',
    imagem: require('../../../../assets/images/04-floorlamps.png'),
    estudio: 'Kerry&King Designs',
    itemName: 'Jack',
    preco: 67.23,
    itemDesc:
      'Cicero, written in 45 BC. This book is a treatise on the theory of ethics,',
  },
  {
    id: '3ac68afvvc-c605-48d3-a4f8-fbd91aa97f63',
    titulo: 'Light Decorations',
    imagem: require('../../../../assets/images/05-lightdecor.png'),
    estudio: 'Dave&Sugar Designs',
    itemName: 'Amanda',
    preco: 98.4,
    itemDesc:
      'Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic',
  },
  {
    id: '58694a0f-3deea1-471f-bd96-145571e29d72',
    titulo: 'Garlands',
    imagem: require('../../../../assets/images/06-garlands.png'),
    estudio: 'Jeff&Lighter Designs',
    itemName: 'Julia',
    preco: 100.3,
    itemDesc:
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below ',
  },
];

const Lista = () => {
  return (
    <View style={styles.container}>
      <View style={styles.separador} />
      <View style={styles.containerTexto}>
        <Text style={styles.texto}>Categorias</Text>
      </View>
      <FlatList
        numColumns={2}
        data={DATA}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Lista;
