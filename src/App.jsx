import Router from './router/Router';
import { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setItems(json.map((item) => ({ ...item, quantity: 1 })))) // append quantity property to item object
      .catch((error) => console.log(error));
  }, []);

  const setQuantity = (itemId, action) => {
    if (action === 'add') {
      const nextItems = items.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity + 1 };
        } else return item;
      });
      setItems(nextItems);
    }
    if (action === 'subtract') {
      const nextItems = items.map((item) => {
        if (item.id === itemId) {
          if (item.quantity === 1) return item;
          return { ...item, quantity: item.quantity - 1 };
        } else return item;
      });
      setItems(nextItems);
    }
  };

  return (
    <>
      <Router items={items} setQuantity={setQuantity} />
    </>
  );
}

export default App;
