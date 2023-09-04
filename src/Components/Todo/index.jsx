import React, { useEffect, useContext } from 'react';
import useForm from '../../hooks/form';
import { v4 as uuid } from 'uuid';
import  { SettingsContext } from '../../Conext/Settings';
import './Todo.scss';


const Todo = () => {

  const settings = useContext(SettingsContext);

  const { handleChange, handleSubmit } = useForm(addItem, settings.defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    settings.setList([...settings.list, item]);
  }

  function deleteItem(id) {
    const items = settings.list.filter( item => item.id !== id );
    settings.setList(items);
  }

  function toggleComplete(id) {

    const items = settings.list.map( item => {
      if ( item.id === id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    settings.setList(items);

  }

  useEffect(() => {
    let incompleteCount = settings.list.filter(item => !item.complete).length;
    settings.setIncomplete(incompleteCount);
    document.title = `To Do List: ${settings.incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [settings.list]);  

  return (
    <>
      <header data-testid="todo-header">
      <div class="p-3 mb-2 bg-secondary text-white"><h1 data-testid="todo-h1">To Do List: {settings.incomplete} items pending</h1></div>
      </header>

      <form onSubmit={handleSubmit} className="col-4 todo-form">

        <h2>Add To Do Item</h2>

        <br></br>
        <label>
          <span>To Do Item</span>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </label>

        <br></br>
        <label>
          <span>Assigned To</span>
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>

        <br></br>
        <label>
          <span>Difficulty</span>
          <input onChange={handleChange} defaultValue={settings.defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
        </label>
        <br></br>

        <label>
          <button type="submit">Add Item</button>
        </label>
      </form>

    </>
  );
};

export default Todo;
