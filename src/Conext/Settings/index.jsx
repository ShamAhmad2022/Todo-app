import React, { useEffect, useState } from 'react';

export const SettingsContext = React.createContext();

function Settings(props) {

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayCompletedItem, setDisplayCompletedItem] = useState(false);
  const [numberOfItemsToDisplay, setnumberOfItemsToDisplay] = useState(3);
  const [sortKeyword, setSortKeyword] = useState(''); 

  useEffect(() => {
    
    const dataFromLS = JSON.parse(localStorage.getItem('ToDoList'));
    if(dataFromLS){
      setList(dataFromLS);
    }
  }, [list]);

  useEffect(() => {
    const savedLists = JSON.parse(localStorage.getItem('settings'));
    if (savedLists) {
      setDisplayCompletedItem(savedLists.checkComplete);
      setnumberOfItemsToDisplay(savedLists.itemPerPage);
      setSortKeyword(savedLists.sortKeyword);
    }
  }, [sortKeyword, numberOfItemsToDisplay, sortKeyword]);

  
  return (
    <SettingsContext.Provider value={{defaultValues, list, setList, incomplete, setIncomplete, currentPage, setCurrentPage, displayCompletedItem, setDisplayCompletedItem, numberOfItemsToDisplay, setnumberOfItemsToDisplay, sortKeyword, setSortKeyword}}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default Settings