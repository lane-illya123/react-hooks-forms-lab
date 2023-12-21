import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import {items as foodArray} from "../data/items"

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("All");
 
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(event){
    const searchTerm = event.target.value.toLowerCase();
  setSearch(searchTerm);
  console.log(searchTerm)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && search === "All") {
      return true;
    } else if (selectedCategory === "All") {
      return item.name.toLowerCase().includes(search);
    } else if (search === "All") {
      return item.category === selectedCategory;
    } else {
      return (
        item.category === selectedCategory &&
        item.name.toLowerCase().includes(search)
      );
    }
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
