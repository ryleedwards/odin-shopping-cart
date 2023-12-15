import PropTypes from 'prop-types';
import { FaPlus, FaMinus } from 'react-icons/fa';

const ItemCard = ({ item, setQuantity }) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'narrowSymbol',
  }).format(item.price);

  return (
    <div className=' flex w-full max-w-xs flex-col justify-between rounded-lg border border-gray-200 bg-white shadow '>
      <a href='#' className='self-center'>
        <img className='h-72 w-72 rounded-t-lg p-8' src={item.image} alt='' />
      </a>
      <div className='px-5 pb-5'>
        <a href='#'>
          <h5 className='text-xl font-semibold tracking-tight text-gray-900'>
            {item.title}
          </h5>
        </a>
        <div className='mt-2.5 flex items-center'>
          {/* FUTURE STAR RATING */}
        </div>
        <div className='my-3 flex h-10 items-center p-3'>
          <div
            className='flex cursor-pointer items-center justify-center rounded-full bg-slate-300 p-2'
            onClick={() => setQuantity(item.id, 'subtract')}
          >
            <FaMinus />
          </div>
          <div className='px-4 text-2xl font-bold'>{item.quantity}</div>
          <div
            className='flex cursor-pointer items-center justify-center rounded-full bg-slate-300 p-2'
            onClick={() => setQuantity(item.id, 'add')}
          >
            <FaPlus />
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <span className='text-3xl font-bold text-gray-900'>
            {formattedPrice}
          </span>
          <a
            href='#'
            className='rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  item: PropTypes.object.isRequired,
  setQuantity: PropTypes.func.isRequired,
};

export default ItemCard;
