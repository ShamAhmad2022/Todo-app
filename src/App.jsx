import React from 'react';
import Todo from './Components/Todo';
import AppHeader from './Components/Header';
import Settings from './Conext/Settings';
import List from './Components/List/indedx';
import './App.scss'

export default class App extends React.Component {
  render() {
    return (
      <>
      <Settings>
      <AppHeader />
      <div className="container">
      <Todo />
      <List />
      </div>
      </Settings>
      </>
    );
  }
}
