import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import ListaProdutos from './views/ListaProdutos';
import DetalhesProduto from './views/DetalhesProduto';
import {COR_DE_FUNDO} from './styles/cores';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Checkout from './views/Checkout';

const Stack = createStackNavigator();
const estado_inicial = {
  itensCheckout: [1, 2, 3, 4],
};

const App = () => {
  return (
    <NavigationContainer>
      <DataContext.Provider value={estado_inicial}>
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
            <Stack.Screen
              name="Checkout"
              component={Checkout}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </DataContext.Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COR_DE_FUNDO,
  },
});

export const DataContext = React.createContext();
export default App;
