import React, { useContext } from 'react'
import { SettingsContext } from '../../../Conext/Settings';
import './SettingsDisplay.scss';

function SettingsDisplay() {

    const settings = useContext(SettingsContext);

  return (
    <div className='settings-display'>
        <h2>Updated settings</h2>
        {settings.displayCompletedItem ? <p>Show completed ToDos</p> : <p>Don't show completed ToDos</p>}
        <p>items per page : {settings.numberOfItemsToDisplay}</p>
        <p>sort keyword: {settings.sortKeyword}</p>
    </div>
  )
}

export default SettingsDisplay