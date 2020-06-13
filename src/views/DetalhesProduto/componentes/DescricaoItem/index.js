import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './styles';
import Botao from '../../../../componentes/Botao';

const DescricaoItem = ({
  imagem,
  estudio,
  itemDesc,
  titulo,
  itemName,
  preco,
}) => {
  const [detalhes, setDetalhes] = useState(false);
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
          {detalhes && (
            <View>
              <Text style={styles.textoDescricao}>{itemDesc}</Text>
            </View>
          )}
          <View style={styles.rodape}>
            <Text style={styles.moeda}>{preco}</Text>
            <Botao
              titulo={detalhes ? 'Mostrar menos' : 'Mostrar mais'}
              icone={false}
              width={140}
              onPress={() => {
                setDetalhes(!detalhes);
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DescricaoItem;
