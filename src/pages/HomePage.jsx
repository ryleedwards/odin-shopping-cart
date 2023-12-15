import Navbar from '../components/Navbar';
import slides from '../assets/slides';
import ImageSlider from '../components/ImageSlider';
import { array } from 'prop-types';

const HomePage = ({ items }) => {
  return (
    <>
      <Navbar items={items} />
      <main className='h-screen bg-slate-200'>
        <ImageSlider slides={slides} maxWidth={'xLarge'} height={'medium'} />
      </main>
    </>
  );
};

HomePage.propTypes = {
  items: array.isRequired,
};

export default HomePage;
