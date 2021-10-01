import React, { createContext, useState } from 'react';

export const SortingContext = createContext();

const { Provider } = SortingContext;

//Provide the sortBy variable from DropDown.jsx to SortingSelector.jsx 
export const SortingProvider = (props) => {

   const [sortBy, setSortBy] = useState("Hue");

   return (
      <Provider value={[sortBy, setSortBy]}>
         {props.children}
      </Provider>
   );

}