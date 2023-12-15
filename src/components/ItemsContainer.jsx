import ItemCard from './ItemCard';
import { array, func } from 'prop-types';

const ItemsContainer = ({ items, setQuantity }) => {
  return (
    <div className='flex flex-wrap justify-center gap-4 p-6'>
      {items.map((item) => {
        return <ItemCard key={item.id} item={item} setQuantity={setQuantity} />;
      })}
    </div>
  );
};

ItemsContainer.propTypes = {
  items: array.isRequired,
  setQuantity: func.isRequired,
};

export default ItemsContainer;
