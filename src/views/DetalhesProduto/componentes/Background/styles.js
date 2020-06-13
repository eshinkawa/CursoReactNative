import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  imagemFundo: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
  imagemSeta: {
    width: 24,
    height: 24,
    marginTop: 36,
    marginLeft: 24,
  },
  imagemContainer: {
    flex: 1.5,
  },
  setaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
