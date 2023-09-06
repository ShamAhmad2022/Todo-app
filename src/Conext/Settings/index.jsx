import React, { useState } from 'react';


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
  
  return (
    <SettingsContext.Provider value={{defaultValues, list, setList, incomplete, setIncomplete, currentPage, setCurrentPage}}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default Settings