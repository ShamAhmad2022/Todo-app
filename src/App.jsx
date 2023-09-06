import React from "react";
import Todo from "./Components/Todo";
import AppHeader from "./Components/Header";
import SettingsPage from "./Components/settingsPage/SettingsPage";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

export default class App extends React.Component {
  render() {
    return (
      <>
        <AppHeader />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Todo />} />
            <Route exact path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </>
    );
  }
}
