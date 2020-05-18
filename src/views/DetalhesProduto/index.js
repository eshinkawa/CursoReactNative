import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import DescricaoItem from './componentes/DescricaoItem';
import Background from './componentes/Background';

const DetalhesProduto = () => {
  const imgSrc = require('../../assets/images/bgimage.png');
  const navigation = useNavigation();
  const [detalhes, setDetalhes] = useState(false);

  return (
    <View style={styles.container}>
      <DescricaoItem imgSrc={imgSrc} navigation={navigation} />
      <Background
        detalhes={detalhes}
        setDetalhes={() => {
          setDetalhes(!detalhes);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DetalhesProduto;
