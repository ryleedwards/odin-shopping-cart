import { useEffect, useState } from 'react';
import ItemCard from './ItemCard';

const ItemsContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setItems(json))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    items.length > 0 && console.log(items);
  }, [items]);

  return (
    <div className='flex flex-wrap justify-center gap-4 p-6'>
      {items.map((item) => {
        return <ItemCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ItemsContainer;
