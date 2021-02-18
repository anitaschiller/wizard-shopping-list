import { useState, useEffect } from "react";
import { v4 as uuid4 } from "uuid";

import Button from "./Button";
import Form from "./Form";
import Headline from "./Headline";
import loadFromLocal from "./lib/loadFromLocal";
import ShoppingItem from "./ShoppingItem";

function App() {
  const LOCAL_STORAGE_KEY = "shoppingList";
  const [shoppingItems, setShoppingItems] = useState(
    loadFromLocal(LOCAL_STORAGE_KEY) ?? []
  );
  const [undoneItems, setUndoneItems] = useState([]);
  console.log(undoneItems);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(shoppingItems));
  }, [shoppingItems]);

  function addShoppingItem(title) {
    const newShoppingItem = { title: title, isDone: false, id: uuid4() };
    setShoppingItems([...shoppingItems, newShoppingItem]);
    console.log(shoppingItems);
  }

  function toggleCheckbox(idToToggle) {
    const newItems = shoppingItems.map((item) => {
      if (item.id === idToToggle) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setShoppingItems(newItems);
  }

  function deleteShoppingItem(idToDelete) {
    const remainingItems = shoppingItems.filter(
      (item) => item.id !== idToDelete
    );
    setShoppingItems(remainingItems);
  }

  function deleteList() {
    setShoppingItems([]);
  }

  function showAllItems() {
    setUndoneItems(shoppingItems);
  }

  function filterUndoneItems() {
    const filteredItems = shoppingItems.filter((item) => item.isDone === false);
    setUndoneItems(filteredItems);
    //console.log("filtered", filteredItems);
  }

  return (
    <div className="App">
      <Headline>Anita's Shopping List</Headline>
      <Form onCreateShoppingItem={addShoppingItem} onDeleteList={deleteList} />

      {/*       {shoppingItems.map(({ title, isDone, id }) => (
        <ShoppingItem
          key={id}
          onToggleItem={() => toggleCheckbox(id)}
          title={title}
          isDone={isDone}
          onDeleteItem={() => deleteShoppingItem(id)}
        />
      ))} */}

      {filterUndoneItems &&
        undoneItems.map(({ title, isDone, id }) => (
          <ShoppingItem
            key={id}
            onToggleItem={() => toggleCheckbox(id)}
            title={title}
            isDone={isDone}
            onDeleteItem={() => deleteShoppingItem(id)}
          />
        ))}

      {showAllItems &&
        shoppingItems.map(({ title, isDone, id }) => (
          <ShoppingItem
            key={id}
            onToggleItem={() => toggleCheckbox(id)}
            title={title}
            isDone={isDone}
            onDeleteItem={() => deleteShoppingItem(id)}
          />
        ))}

      <Button text="Show All" clickHandler={showAllItems} />
      <Button text="Show Open Items" clickHandler={filterUndoneItems} />
    </div>
  );
}

export default App;
