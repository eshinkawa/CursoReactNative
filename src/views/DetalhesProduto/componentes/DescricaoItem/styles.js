import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  imagemFundo: {width: Dimensions.get('window').width, height: '100%'},
  imagemSeta: {width: 24, height: 24},
  imagemContainer: {flex: 1.5},
  setaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
  },
  sacolaContainer: {
    backgroundColor: 'white',
    padding: 18,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    elevation: 3,
    marginRight: -24,
    marginTop: -10,
  },
});
