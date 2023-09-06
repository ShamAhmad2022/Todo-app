import React from 'react';
import Todo from './Components/Todo';
import AppHeader from './Components/Header';
import Settings from './Conext/Settings';
import './App.scss'

export default class App extends React.Component {
  render() {
    return (
      <>
      <Settings>
      <AppHeader />
      <div className="container">
      <Todo />
      </div>
      </Settings>
      </>
    );
  }
}
