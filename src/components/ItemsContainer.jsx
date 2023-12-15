import { useEffect, useState } from 'react';
import ItemCard from './ItemCard';

const ItemsContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setItems(json.map((item) => ({ ...item, quantity: 1 })))) // append quantity property to item object
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    items.length > 0 && console.log(items);
  }, [items]);

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
    <div className='flex flex-wrap justify-center gap-4 p-6'>
      {items.map((item) => {
        return <ItemCard key={item.id} item={item} setQuantity={setQuantity} />;
      })}
    </div>
  );
};

export default ItemsContainer;
