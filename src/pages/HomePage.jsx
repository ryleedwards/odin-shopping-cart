import Navbar from '../components/Navbar';
import slides from '../assets/slides';
import ImageSlider from '../components/ImageSlider';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className='h-screen bg-slate-200'>
        <ImageSlider slides={slides} maxWidth={'xLarge'} height={'medium'} />
      </main>
    </>
  );
};

export default HomePage;
