import React, { useState, useRef, useContext } from 'react';
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import classes from './SearchInput.module.css';
import SideCompContext from '../../store/sideCompContext.jsx';

const SearchInput = ({inpValue, setInpValue}) => {
  const NavListController = useContext(SideCompContext);
  const searchRef = useRef();
  const [openedSearch, setOpenedSearch] = useState(false);

  const handleFocus = (scope) =>{
    if(scope === "scope1"){
        searchRef.current.focus();
    }
    else{
        setOpenedSearch(true);
        NavListController.hideList();
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
