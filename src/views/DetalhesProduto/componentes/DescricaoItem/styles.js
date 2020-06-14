import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_SMALL,
  FONT_SIZE_MEDIUM,
  FONT_FAMILY_BOLD,
  FONT_SIZE_X_LARGE,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_LARGE,
} from '../../../../styles/tipografia';

export const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    marginTop: -60,
  },
  itemPosicao: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 28,
    width: '80%',
    elevation: 4,
  },
  imagemItem: {width: 30, height: 72},
  textoPosicao: {flexDirection: 'row', justifyContent: 'space-between'},
  textoSuperior: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_MEDIUM,
    marginBottom: 4,
  },
  textoMedio: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_X_LARGE,
    marginBottom: 4,
  },
  textoInferior: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_SMALL,
    color: '#CACACA',
    marginBottom: 12,
  },
  textoDescricao: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_SMALL,
    color: '#ACAAAB',
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moeda: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_LARGE,
    marginTop: 10,
    color: 'black',
  },
});
