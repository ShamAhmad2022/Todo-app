import React, { useEffect, useContext, useState } from "react";
import useForm from "../../hooks/form";
import { v4 as uuid } from "uuid";
import { SettingsContext } from "../../Conext/Settings";
import List from "../List";
import "./Todo.scss";
import Auth from "../Auth ";
import { LoginContext } from "../../Conext/AuthContext";
import axios from "axios";

const Todo = () => {
  const settings = useContext(SettingsContext);
  const loginContext = useContext(LoginContext);

  const { handleChange, handleSubmit } = useForm(
    addItem,
    settings.defaultValues
  );

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    settings.setList([...settings.list, item]);
    console.log(settings.list, "0000000000000");
    // save lists to local storage
    localStorage.setItem("ToDoList", JSON.stringify([...settings.list, item]));
  }

  useEffect(() => {
    let incompleteCount = settings.list.filter((item) => !item.complete).length;
    settings.setIncomplete(incompleteCount);
    document.title = `To Do List: ${settings.incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily.
    // disable code used to avoid linter warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.list]);


  function onChangeEmail(e){
    setEmail(e.target.value);
  }

  function onChangePassword(e){
    setPassword(e.target.value);
  }

  function onChangeRole(e){
    setRole(e.target.value);
  }

  async function submitSignUp(e){
    e.preventDefault();

    const obj={
      "username":email,
      "password":password,
      "role":role
    }

    const res = await axios.post('https://auth-api-ylcl.onrender.com/signup', obj);
    if(res.status === 201){
      alert('user has created sucessfully, you may now Login');
      e.target.elements.email.value = '';
      e.target.elements.password.value = '';
      e.target.elements.role.value = '';
    }
  }

  return loginContext.loggedIn ? (
    <Auth>
      <header data-testid="todo-header">
        <div class="p-3 mb-2 bg-secondary text-white">
          <h1 data-testid="todo-h1">
            To Do List: {settings.incomplete} items pending
          </h1>
        </div>
      </header>

      <div className="flex-con">
        <Auth capability="create">
          <div className="todo-form">
            <form onSubmit={handleSubmit} className="flex-form">
              <h2>Add To Do Item</h2>

              <label>
                <span>To Do Item</span>
                <input
                  onChange={handleChange}
                  name="text"
                  type="text"
                  placeholder="Item Details"
                />
              </label>

              <label>
                <span>Assigned To</span>
                <input
                  onChange={handleChange}
                  name="assignee"
                  type="text"
                  placeholder="Assignee Name"
                />
              </label>

              <label>
                <span>Difficulty</span>
                <input
                  onChange={handleChange}
                  defaultValue={settings.defaultValues.difficulty}
                  type="range"
                  min={1}
                  max={5}
                  name="difficulty"
                />
              </label>

              <label>
                <button type="submit">Add Item</button>
              </label>
            </form>
          </div>
        </Auth>

        <div className="list-flex">
          <List />
        </div>
      </div>
    </Auth>
  ) : (
    <div className="landingPage-flex">
      <div class=" alert alert-warning warning-width" role="alert">
        please <strong>Log in</strong> first so you can see and use the to-do
        app !!
      </div>
      <div className="signup-form">
        <form onSubmit={submitSignUp} className="signup-form-content">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Username
            </label>
            <input
              type="test"
              class="form-control"
              name="email"
              onChange={onChangeEmail}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              name="password"
              onChange={onChangePassword}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Role
            </label>
            <select class="form-select" aria-label="Default select example" name="role" onChange={onChangeRole}>
              <option value="regular">regular</option>
              <option value="provider">provider</option>
              <option value="editor">editor</option>
              <option value="admin">admin</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Todo;
