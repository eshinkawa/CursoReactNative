import {StyleSheet} from 'react-native';
import {COR_DE_FUNDO} from '../../../../styles/cores';
import {FONT_FAMILY_REGULAR} from '../../../../styles/tipografia';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
  separador: {
    borderWidth: 0.5,
    borderColor: '#A1A5AA',
    margin: 10,
  },
  containerTexto: {
    marginTop: -46,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  texto: {
    backgroundColor: COR_DE_FUNDO,
    textAlign: 'center',
    padding: 24,
    alignSelf: 'flex-start',
    color: '#A1A5AA',
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 16,
  },
});
