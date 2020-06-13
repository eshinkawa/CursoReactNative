import React, {useContext} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {DataContext} from '../..';

const Checkout = () => {
  const {itensCheckout} = useContext(DataContext);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello Checkout length:{itensCheckout.length}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Checkout;
