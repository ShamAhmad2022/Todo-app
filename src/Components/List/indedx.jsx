import React, { useContext } from 'react'
import { SettingsContext } from '../../Conext/Settings';


function List() {

  const settings = useContext(SettingsContext);


  function toggleComplete(id) {

    const items = settings.list.map( item => {
      if ( item.id === id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    settings.setList(items);

  }


  return (
   <>
    {settings.list.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}
   </>
  )
}

export default List