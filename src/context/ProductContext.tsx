import React, {createContext, useReducer, type ReactNode, useContext} from 'react';
import {type ProductState, type ProductAction, initialProducts} from '../types';

const productReducer = (state: ProductState, action: ProductAction): ProductState => {
  switch(action.type) {
    case 'ADD_PRODUCT':
      return{ ...state, products: [...state.products, action.payload] };
    case 'UPDATE_PRODUCT':
      return{
        ...state,
        products: state.products.map((p) => (p.id === action.payload.id ? action.payload : p)),
      };
    case 'DELETE_PRODUCT':
      return{
        ...state,
        products: state.products.filter((p) => p.id !== action.payload),
      };
    default:
      return state;
  }
};

interface ContextProps{
  state: ProductState;
  dispatch: React.Dispatch<ProductAction>;
}

const ProductContext = createContext<ContextProps | undefined>(undefined);
export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(productReducer, { products: initialProducts });

  return(
    <ProductContext.Provider value={{state, dispatch}}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  return context;
};