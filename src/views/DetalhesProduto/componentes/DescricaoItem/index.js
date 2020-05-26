import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './styles';
import Botao from '../../../../componentes/Botao';

const DescricaoItem = () => {
  const [detalhes, setDetalhes] = useState(false);

  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemPosicao}>
        <View style={styles.item}>
          <View style={styles.textoPosicao}>
            <View>
              <Text style={styles.textoSuperior}>Jim&Jill Designs</Text>
              <Text style={styles.textoMedio}>Wilson</Text>
              <Text style={styles.textoInferior}>Table Lamp</Text>
            </View>

            <Image
              source={require('../../../../assets/images/05-lightdecor.png')}
              style={styles.imagemItem}
            />
          </View>
          {detalhes && (
            <View>
              <Text style={styles.textoDescricao}>
                Jim&Kill Designs created a master piece called Wilson. It's a
                dream lamp for any chic office out there.
              </Text>
            </View>
          )}
          <View style={styles.rodape}>
            <Text style={styles.moeda}>$92,00</Text>
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
