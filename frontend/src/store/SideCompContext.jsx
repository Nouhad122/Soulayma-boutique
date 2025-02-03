import React, { createContext, useState } from 'react';

const SideCompContext = createContext({
    openedList: false,
    openedFilter: false,
    inputValue: '',
    openedFullImg: {},
    modalContent: false,
    showList: () =>{},
    hideList: () =>{},
    showFilter: () =>{},
    hideFilter: () =>{},
    emptyInput: () =>{},
    changeInputValue: () =>{},
    openFirstImage: () =>{},
    openSecondImage: () =>{},
    closeFullImage: () =>{},
    goToNextImg: () =>{},
    goToPrevImg: () =>{},
    showContentInModal: () =>{},
    hideContentInModal: () =>{}
    
})


export const SideCompContextProvider = ({children}) => {
    const [openList, setOpenList] = useState();
    const [openFilter, setOpenFilter] = useState();
    const [inpValue, setInpValue] = useState('');
    const [openFullImage, setOpenFullImage] = useState({ isOpen: false, image: 1 });
    const [showModalContent, setShowModalContent] = useState(false);

    const showList = () =>{
        setOpenList(true);
        setOpenFilter(false);
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
        setOpenFilter(false);
        setOpenList(false);
        setShowModalContent(false);
    }

    const openFirstImage = () =>{
        setOpenFullImage((prev) =>({...prev, isOpen: true, image: 1}));
    }

    const openSecondImage = () =>{
        setOpenFullImage((prev) =>({...prev, isOpen: true, image: 2}));
    }

    const closeFullImage = () =>{
        setOpenFullImage((prev) =>({...prev, isOpen: false, image: 1}));
    }

    const goToNextImg = () =>{
        setOpenFullImage((prev) => ({...prev, image: 2}));
    }

    const goToPrevImg = () =>{
        setOpenFullImage((prev) => ({...prev, image: 1}));
    }

    const showContentInModal = () =>{
        setShowModalContent(true);
    }

    const hideContentInModal = () =>{
        setShowModalContent(false);
    }

    const SideCompContextValues = ({
        openedList: openList,
        openedFilter: openFilter,
        inputValue: inpValue,
        openedFullImg: openFullImage,
        modalContent: showModalContent,
        showList,
        hideList,
        showFilter,
        hideFilter,
        emptyInput,
        changeInputValue,
        openFirstImage,
        openSecondImage,
        closeFullImage,
        goToNextImg,
        goToPrevImg,
        showContentInModal,
        hideContentInModal
    })
  return (
    <SideCompContext.Provider value={SideCompContextValues}>
      {children}
    </SideCompContext.Provider>
  )
}

export default SideCompContext
