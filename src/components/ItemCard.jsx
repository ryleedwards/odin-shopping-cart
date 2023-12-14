const ItemCard = ({ item }) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'narrowSymbol',
  }).format(item.price);
  return (
    <div className=' flex flex-col justify-between w-full max-w-xs rounded-lg border border-gray-200 bg-white shadow '>
      <a href='#' className='self-center'>
        <img className='rounded-t-lg p-8 h-72 w-72' src={item.image} alt='' />
      </a>
      <div className='px-5 pb-5'>
        <a href='#'>
          <h5 className='text-xl font-semibold tracking-tight text-gray-900'>
            {item.title}
          </h5>
        </a>
        <div className='mb-5 mt-2.5 flex items-center'>
          {/* FUTURE STAR RATING */}
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

export default ItemCard;
