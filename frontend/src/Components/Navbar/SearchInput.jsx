import React, { useState, useRef } from 'react';
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import classes from './SearchInput.module.css';

const SearchInput = ({setOpenedList, inpValue, setInpValue}) => {
  const searchRef = useRef();
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

  const handleInputClose = () =>{
    setOpenedSearch(false);
    setInpValue('');
  }
  
  const navInputClass = `${classes.navInput} ${openedSearch ? '' : classes.closedSearch}`;
  return (
    <>
    <div className={navInputClass}>
        <input
            placeholder='Search For Item...'
            value={inpValue} ref={searchRef}
            onChange={(e) => setInpValue(e.target.value)}
        />

        <FaMagnifyingGlass className={classes.scope} onClick={() => handleFocus("scope1")}/>
        <FaXmark onClick={handleInputClose} className={classes.xSearch}/>
    </div>
    <FaMagnifyingGlass className={classes.secondScope} onClick={() => handleFocus("scope2")}/>
    </>
  )
}

export default SearchInput
