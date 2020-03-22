import {StyleSheet, Dimensions} from 'react-native';
import { FONT_FAMILY_BOLD, FONT_SIZE_MEDIUM, FONT_SIZE_X_LARGE, FONT_SIZE_SMALL, FONT_FAMILY_REGULAR } from '../../styles/tipografia';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
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
    fontSize: 22,
    marginTop: 10,
  }
});
