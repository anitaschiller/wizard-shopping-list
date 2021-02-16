import { useState } from "react";

import "./App.css";

import Form from "./Form";
import Headline from "./Headline";
import ShoppingItem from "./ShoppingItem";

function App() {
  const [shoppingItems, setShoppingItems] = useState([]);

  function addShoppingItem(title) {
    const newShoppingItem = { title: title, isDone: false };
    setShoppingItems([...shoppingItems, newShoppingItem]);
    console.log(shoppingItems);
  }

  function toggleCheckbox(indexToToggle) {
    const itemToToggle = shoppingItems.find(
      (item, index) => index === indexToToggle
    );
    itemToToggle.isDone = !itemToToggle.isDone;
    const firstHalf = shoppingItems.slice(0, indexToToggle);
    const secondHalf = shoppingItems.slice(indexToToggle + 1);
    setShoppingItems([...firstHalf, itemToToggle, ...secondHalf]);
  }

  return (
    <div className="App">
      <Headline>Anita's Shopping List</Headline>
      <Form onCreateShoppingItem={addShoppingItem} />
      {shoppingItems.map(({ title, isDone }, index) => (
        <ShoppingItem
          onToggleItem={() => toggleCheckbox(index)}
          title={title}
          isDone={isDone}
        />
      ))}
    </div>
  );
}

export default App;
