import React, { useState } from 'react';


export const SettingsContext = React.createContext();


function Settings(props) {

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  
  return (
    <SettingsContext.Provider value={{defaultValues, list, setList, incomplete, setIncomplete}}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default Settings