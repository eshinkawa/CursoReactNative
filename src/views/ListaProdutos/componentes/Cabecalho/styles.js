import {StyleSheet} from 'react-native';
import {WHITE} from '../../../../styles/cores';
import {FONT_FAMILY_BOLD} from '../../../../styles/tipografia';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 24,
    paddingLeft: 24,
  },
  titulo: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 36,
  },
  iconeMenu: {
    width: 24,
    height: 24,
    marginLeft: 24,
  },
  containerSacola: {
    backgroundColor: WHITE,
    padding: 18,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
  },
  iconeSacola: {
    width: 30,
    height: 30,
  },
});
