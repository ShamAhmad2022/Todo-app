import React from 'react'
import SettingsForm from './SettingsForm.jsx';
import SettingsDisplay from './SettingsDisplay';
import './SettingsPage.scss';

function SettingsPage() {
  return (
    <>
     <header data-testid="todo-header">
        <div class="p-3 mb-2 bg-secondary text-white"><h1 data-testid="todo-h1">Manage settings</h1></div>
    </header>
    <div className='flex-con'>
     <SettingsForm />
     <SettingsDisplay />   
    </div>
    </>
  )
}

export default SettingsPage;