import React, { useEffect, useState } from 'react';


export const SettingsContext = React.createContext();


function Settings(props) {

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([
    {
      text: 'finish the app',
      assignee: 'Sam',
      difficulty: 4,
      complete: false,
    },
    {
      text: 'refactr the code',
      assignee: 'Sam',
      difficulty: 3,
      complete: false,
    },
    {
      text: 'finish the sketch by tomorrow night',
      assignee: 'Sam',
      difficulty: 2,
      complete: false,
    },
  ]);
  const [incomplete, setIncomplete] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayCompletedItem, setDisplayCompletedItem] = useState(false);
  const [numberOfItemsToDisplay, setnumberOfItemsToDisplay] = useState(3);
  const [sortKeyword, setSortKeyword] = useState(''); 

  
  useEffect(() => {
    localStorage.setItem('ToDoList', JSON.stringify(list));
  }, [list]);


  const updateSettings = {
    displayCompletedItem,
    numberOfItemsToDisplay,
    sortKeyword
  }
  
  useEffect(() => {
    localStorage.setItem('settings', JSON.stringify(updateSettings));
  }, [displayCompletedItem, numberOfItemsToDisplay, sortKeyword]);
  
  useEffect(() => {
    const savedLists = JSON.parse(localStorage.getItem('settings'));
    if (savedLists) {
      setDisplayCompletedItem(savedLists.displayCompletedItem);
      setnumberOfItemsToDisplay(savedLists.numberOfItemsToDisplay);
      setSortKeyword(savedLists.sortKeyword);
    }
  }, []);

  
  return (
    <SettingsContext.Provider value={{defaultValues, list, setList, incomplete, setIncomplete, currentPage, setCurrentPage, displayCompletedItem, setDisplayCompletedItem, numberOfItemsToDisplay, setnumberOfItemsToDisplay, sortKeyword, setSortKeyword}}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default Settings