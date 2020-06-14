import 'intl';
import 'intl/locale-data/jsonp/pt-BR'; // or any other locale you need

export const numberFormat = value =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
