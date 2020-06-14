import React, {useContext} from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './styles';
import Botao from '../../../../componentes/Botao';
import {DataContext} from '../../../../provider';
import {numberFormat} from '../../../../utils';

const DescricaoItem = ({
  imagem,
  estudio,
  itemDesc,
  titulo,
  itemName,
  preco,
  id,
}) => {
  const {adicionarItem} = useContext(DataContext);
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemPosicao}>
        <View style={styles.item}>
          <View style={styles.textoPosicao}>
            <View>
              <Text style={styles.textoSuperior}>{estudio}</Text>
              <Text style={styles.textoMedio}>{itemName}</Text>
              <Text style={styles.textoInferior}>{titulo}</Text>
            </View>

            <Image source={imagem} style={styles.imagemItem} />
          </View>
          <View>
            <Text style={styles.textoDescricao}>{itemDesc}</Text>
          </View>
          <View style={styles.rodape}>
            <Text style={styles.moeda}>{numberFormat(preco)}</Text>
            <Botao
              titulo={'COMPRAR'}
              width={140}
              onPress={() => {
                adicionarItem({
                  estudio,
                  itemName,
                  titulo,
                  id,
                  imagem,
                  preco,
                });
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DescricaoItem;
