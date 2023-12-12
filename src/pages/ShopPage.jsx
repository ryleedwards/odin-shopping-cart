import Navbar from '../components/Navbar';

const ShopPage = () => {
  const bigText = `Find your perfect fit`;
  const smallText = `Shop our latest deals before it's too late`;
  return (
    <>
      <Navbar />
      <main className='h-screen bg-slate-200'>
        <div className='flex h-32 flex-col justify-center bg-gradient-to-br from-slate-900 to-sky-900 pb-5 text-slate-100'>
          <h2 className='px-4 py-2 text-3xl'>{bigText}</h2>
          <h3 className='px-8 text-lg'>{smallText}</h3>
        </div>
      </main>
    </>
  );
};

export default ShopPage;