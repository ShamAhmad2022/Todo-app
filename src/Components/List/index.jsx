import React, { useContext, useEffect } from 'react'
import { SettingsContext } from '../../Conext/Settings';
import { Container, Pagination } from '@mantine/core';
import './List.scss';


function List() {

  const settings = useContext(SettingsContext);

  const itemsPerPage = settings.numberOfItemsToDisplay; 
  const totalItems = settings.list.length; 
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  function toggleComplete(id) {

    const items = settings.list.map( item => {
      if ( item.id === id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    settings.setList(items);

  }

  function deleteItem(id) {
    const items = settings.displayCompletedItem ? settings.list : settings.list.filter( item => item.id !== id );
    settings.setList(items);
  }

  function handleOnClick(id){
    toggleComplete(id);
    setTimeout(() => {
      deleteItem(id);
    }, 250);
  }

  const handlePageChange = (newPage) => {
    settings.setCurrentPage(newPage);
  };

  useEffect(() => {
    const savedLists = JSON.parse(localStorage.getItem('ToDoList'));
    console.log(savedLists,'!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    if (savedLists) {
      settings.setList(savedLists);
    }
  }, []);


  return (
   <>
      <Container className='list-flex'>
        {settings.list.slice(
          (settings.currentPage - 1) * itemsPerPage,
          settings.currentPage * itemsPerPage
        ).map((item) => (
          <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => handleOnClick(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
        ))}
        
        <Pagination
          value={settings.currentPage}
          onChange={handlePageChange}
          total={totalPages}
        />
      </Container>

   </>
  )
}

export default List