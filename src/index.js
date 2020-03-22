import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import ListaProdutos from './views/ListaProdutos';
import DetalhesProduto from './views/DetalhesProduto';
import {COR_DE_FUNDO} from './styles/cores';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="ListaProdutos">
          <Stack.Screen
            name="ListaProdutos"
            component={ListaProdutos}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DetalhesProduto"
            component={DetalhesProduto}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COR_DE_FUNDO,
  },
});

export default App;
