import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from './Header'
import Filter from './Filter'

function App() {
  const categories = ['All', 'Dairy', 'Produce', 'Dessert']
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isDarkMode, setIsDarkMode] = useState(false);


  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }
  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  // function handleDarkModeClick() {
  //   setIsDarkMode((prevDarkMode) => !prevDarkMode);
  // }

  return (
    <div className={"App " + (isDarkMode ? "light" : "dark")}>
      <Header>
        {/* isDarkMode={isDarkMode} onDarkModeClick = {handleDarkModeClick} > */}
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </Header>
      <Filter categories={categories} selectCategory={selectedCategory} onCategoryChange={handleCategoryChange}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
