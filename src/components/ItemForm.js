import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [newName, setNewName] = useState("")
  const [addCategory, setAddCategory] = useState("Produce")
  
  function handleItemFormSubmit(event) {
    event.preventDefault();
  
    const newItem = {
      id: uuid(),
      name: newName,
      category: addCategory,
    };
    onItemFormSubmit(newItem)
    // Pass the new item to the onItemFormSubmit callback prop
    console.log(newItem)
    setNewName("");
    setAddCategory("Produce");
  }

  return (
    <form className="NewItem" onSubmit={handleItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={newName} onChange={(e) => setNewName(e.target.value)}/>
      </label>

      <label>
        Category:
        <select name="category" value={addCategory} onChange={(e) => setAddCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
