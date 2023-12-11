import Navbar from '../components/Navbar';
import slides from '../assets/slides';
import ImageSlider from '../components/ImageSlider';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <ImageSlider slides={slides} maxWidth={'xLarge'} height={'medium'} />
    </>
  );
};

export default HomePage;
