const Navbar = () => {
  return (
    <nav className='flex items-center bg-sky-950 p-3'>
      <h3 className=' mr-10 text-2xl text-neutral-50'>MyShop</h3>
      <ul className='flex'>
        <li className='mr-3'>
          <a
            className='inline-block rounded border border-blue-500 bg-blue-500 px-3 py-1 text-white'
            href='#'
          >
            Home
          </a>
        </li>
        <li className='mr-3'>
          <a
            className='inline-block rounded border border-white px-3 py-1 text-blue-500 hover:border-gray-200 hover:bg-gray-200'
            href='#'
          >
            Shop
          </a>
        </li>
      </ul>
      <ul className='ml-auto mr-5 flex'>
        <li>
          <div className='place-content-center rounded-full px-2 py-1 text-white hover:cursor-pointer hover:bg-gray-200 hover:text-sky-950'>
            <i className='fa-solid fa-cart-shopping text-lg'></i>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
