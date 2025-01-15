import React, { useState, useRef } from 'react';
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";

const SearchInput = ({setOpenedList, inpValue, setInpValue}) => {
  const searchRef = useRef(null);
  const [openedSearch, setOpenedSearch] = useState(false);

  const handleFocus = (scope) =>{
    if(scope === "scope1"){
        searchRef.current.focus();
    }
    else{
        setOpenedSearch(true);
        setOpenedList(false);
        searchRef.current.focus();
    }
  }
  return (
    <>
    <div className={`nav-input ${openedSearch ? '' : 'closed-search'}`}>
        <input
            placeholder='Search For Item...'
            value={inpValue} ref={searchRef}
            onChange={(e) => setInpValue(e.target.value)}
        />

        <FaMagnifyingGlass className='scope' onClick={() => handleFocus("scope1")}/>
        <FaXmark onClick={() => setOpenedSearch(false)} className='x-search'/>
    </div>
    <FaMagnifyingGlass className='scope2' onClick={() => handleFocus("scope2")}/>
    </>
  )
}

export default SearchInput
