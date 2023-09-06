import React, { useContext, useState } from "react";
import "./SettingsForm.scss";
import { SettingsContext } from "../../../Conext/Settings";

function SettingsForm() {

    const settings = useContext(SettingsContext);

    const [formState, setFormState] = useState({
        checkComplete: settings.displayCompletedItem,
        itemPerPage: settings.numberOfItemsToDisplay,
        sortKeyword: settings.sortKeyword,
      });
    
      const handleCheckBox = (e) => {
        setFormState({ ...formState, checkComplete: e.target.checked });
      };
    
      const handleItemsPerPage = (e) => {
        setFormState({ ...formState, itemPerPage: e.target.value });
      };
    
      const handleSortKeyword = (e) => {
        setFormState({ ...formState, sortKeyword: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        settings.setDisplayCompletedItem(formState.checkComplete);
        settings.setnumberOfItemsToDisplay(formState.itemPerPage);
        settings.setSortKeyword(formState.sortKeyword);
      };
    


  return (
    <>
      <div className="todo-form">
        <form onSubmit={handleSubmit} className="flex-form">
          <h2>Update settings</h2>
          <label>
          <input type="checkbox" name="checkComplete" onChange={handleCheckBox}/>
            <span>Show completed ToDos</span>
          </label>

          <label>
            <span>Items per page: </span>
            <input name="itemPerPage" type="number" onChange={handleItemsPerPage}/>
          </label>

            <label>
              <span>Sort KeyWord</span>
              <input name="sortKeyword" type="text" placeholder="Sort Keyword" onChange={handleSortKeyword}/>
            </label>

          <label>
            <button type="submit">Update</button>
          </label>
        </form>
      </div>
    </>
  );
}

export default SettingsForm;
