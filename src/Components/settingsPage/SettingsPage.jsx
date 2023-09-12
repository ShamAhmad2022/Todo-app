import React, { useContext } from 'react'
import SettingsForm from './SettingsForm.jsx';
import SettingsDisplay from './SettingsDisplay';
import './SettingsPage.scss';
import { LoginContext } from '../../Conext/AuthContext/index.jsx';
import Auth from '../Auth /index.jsx';

function SettingsPage() {

  const loginContext = useContext(LoginContext);


  return loginContext.loggedIn ? (
    <Auth>
     <header data-testid="todo-header">
        <div class="p-3 mb-2 bg-secondary text-white"><h1 data-testid="todo-h1">Manage settings</h1></div>
    </header>
    <div className='flex-con'>
     <SettingsForm />
     <SettingsDisplay />   
    </div>
    </Auth>
  ) : (
<div class="position-absolute top-50 start-50 translate-middle alert alert-warning warning-width" role="alert">
please <strong>Log in</strong> first so you can see and use the to-do app !!
</div>
  );
}

export default SettingsPage;