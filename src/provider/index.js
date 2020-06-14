import React, {useState} from 'react';

export const DataContext = React.createContext();

const Provider = ({children}) => {
  const [itensCheckout, setItensCheckout] = useState([]);
  return (
    <DataContext.Provider
      value={{
        itensCheckout,
        adicionarItem: novoItem => {
          let copiaItemsCheckout = [...itensCheckout];
          let itemFiltrado = copiaItemsCheckout.find(
            item => item.id === novoItem.id,
          );
          if (itemFiltrado) {
            itemFiltrado.quantidade = itemFiltrado.quantidade + 1;
          } else {
            novoItem.quantidade = 1;
            copiaItemsCheckout = [...copiaItemsCheckout, novoItem];
          }
          setItensCheckout(copiaItemsCheckout);
        },
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default Provider;
