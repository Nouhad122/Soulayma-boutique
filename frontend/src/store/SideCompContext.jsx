import React, { createContext, useState } from 'react';

const SideCompContext = createContext({
    openedList: false,
    openedFilter: false,
    showList: () =>{},
    hideList: () =>{},
    showFilter: () =>{},
    hideFilter: () =>{}
})


export const SideCompContextProvider = ({children}) => {
    const [openList, setOpenList] = useState();
    const [openFilter, setOpenFilter] = useState();

    const showList = () =>{
        setOpenList(true);
    }
    
    const hideList = () =>{
        setOpenList(false);
    }
    
    const showFilter = () =>{
        setOpenFilter(true);
    }
    
    const hideFilter = () =>{
        setOpenFilter(false);
    }

    const SideCompContextValues = ({
        openedList: openList,
        openedFilter: openFilter,
        showList,
        hideList,
        showFilter,
        hideFilter
    })
  return (
    <SideCompContext.Provider value={SideCompContextValues}>
      {children}
    </SideCompContext.Provider>
  )
}

export default SideCompContext
