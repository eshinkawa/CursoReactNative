import React, {useContext} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {DataContext} from '../../provider';

const Checkout = () => {
  const {itensCheckout} = useContext(DataContext);

  console.log(itensCheckout);
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
