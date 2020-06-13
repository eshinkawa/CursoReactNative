import React, {useContext} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DataContext} from '../provider';

const Sacola = () => {
  const {itensCheckout} = useContext(DataContext);
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.push('Checkout')}>
      <View style={styles.containerSacola}>
        <Image
          source={require('../assets/images/icone-sacola.png')}
          style={styles.iconeSacola}
        />
        {itensCheckout.length > 0 && (
          <View style={styles.containerQuantidade}>
            <Text style={styles.textoQuantidade}>{itensCheckout.length}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconeSacola: {
    width: 30,
    height: 30,
  },
  containerSacola: {
    backgroundColor: 'white',
    padding: 18,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: 16,
  },
  containerQuantidade: {
    backgroundColor: 'red',
    borderRadius: 100,
    marginTop: -18,
    marginLeft: 11,
  },
  textoQuantidade: {
    textAlign: 'center',
    padding: 4,
    fontSize: 10,
    fontFamily: 'OpenSans-SemiBold',
    color: '#fff',
  },
});

export default Sacola;
