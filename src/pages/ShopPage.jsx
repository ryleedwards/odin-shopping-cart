import ItemsContainer from '../components/ItemsContainer';
import Navbar from '../components/Navbar';

const ShopPage = () => {
  const bigText = `Find your perfect fit`;
  const smallText = `Shop our latest deals before it's too late`;
  return (
    <>
      <Navbar />
      <main className='h-screen bg-slate-200'>
        <div className='flex h-32 flex-col justify-center bg-gradient-to-br from-sky-950 to-blue-600 pb-5 text-slate-100'>
          <h2 className='px-4 py-2 text-3xl font-bold'>{bigText}</h2>
          <h3 className='px-8 text-lg'>{smallText}</h3>
        </div>
        <ItemsContainer />
      </main>
    </>
  );
};

export default ShopPage;
