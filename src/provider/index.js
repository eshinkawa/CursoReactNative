import React, {useState} from 'react';

export const DataContext = React.createContext();

const Provider = ({children}) => {
  const [itensCheckout, setItensCheckout] = useState([1, 2]);
  return (
    <DataContext.Provider
      value={{
        itensCheckout: [1, 2, 3],
        updateDeliveryStatus: novoItem => {
          setItensCheckout({...itensCheckout, novoItem});
        },
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default Provider;
