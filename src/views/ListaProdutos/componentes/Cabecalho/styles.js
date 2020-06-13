import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 24,
    paddingLeft: 24,
  },
  titulo: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 36,
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
