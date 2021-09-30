import React, { createContext, useState } from 'react';

export const SortingContext = createContext();

const { Provider } = SortingContext;

export const SortingProvider = (props) => {

const [sortBy, setSortBy] = useState("Hue");

return(
   <Provider value={[sortBy, setSortBy]}>
      {props.children}
   </Provider>
 );

}