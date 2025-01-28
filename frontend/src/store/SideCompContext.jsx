import React, { createContext, useState } from 'react';

const SideCompContext = createContext({
    openedList: false,
    openedFilter: false,
    inputValue: '',
    showList: () =>{},
    hideList: () =>{},
    showFilter: () =>{},
    hideFilter: () =>{},
    emptyInput: () =>{},
    changeInputValue: () =>{}
})


export const SideCompContextProvider = ({children}) => {
    const [openList, setOpenList] = useState();
    const [openFilter, setOpenFilter] = useState();
    const [inpValue, setInpValue] = useState('');

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

    const emptyInput = () =>{
        setInpValue('');
    }

    const changeInputValue = (event) =>{
        setInpValue(event.target.value);
    }

    const SideCompContextValues = ({
        openedList: openList,
        openedFilter: openFilter,
        inputValue: inpValue,
        showList,
        hideList,
        showFilter,
        hideFilter,
        emptyInput,
        changeInputValue
    })
  return (
    <SideCompContext.Provider value={SideCompContextValues}>
      {children}
    </SideCompContext.Provider>
  )
}

export default SideCompContext
