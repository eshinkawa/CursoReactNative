import {StyleSheet} from 'react-native';
import {COR_DE_FUNDO} from '../../../../styles/cores';
import {FONT_SIZE_24} from '../../../../styles/tipografia';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 24,
  },
  titulo: {
    fontFamily: 'OpenSans-ExtraBold',
    fontSize: 28,
  },
  iconeMenu: {
    width: 24,
    height: 24,
    marginLeft: 24,
  },
  containerSacola: {
    backgroundColor: 'white',
    padding: 18,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
  },
  iconeSacola: {
    width: 30,
    height: 30,
  },
});
