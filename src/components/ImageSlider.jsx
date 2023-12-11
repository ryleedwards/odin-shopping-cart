import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useState } from 'react';
import PropTypes from 'prop-types';

const ImageSlider = ({ maxWidth, height, slides }) => {
  const maxWidthVariants = {
    small: 'max-w-sm', // 384px
    medium: 'max-w-lg', // 512px
    large: 'max-w-3xl', // 768px
    xLarge: 'max-w-7xl', // 1280px
  };
  const heightVariants = {
    small: 'h-[192px]', // 48px
    medium: 'h-[384px]', // 96px
    large: 'h-[512px]', // 192px
    xLarge: 'h-[768px]', // 384px
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div
      className={`relative m-auto ${heightVariants[height]} w-full ${maxWidthVariants[maxWidth]} group px-4 py-8`}
    >
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='h-full w-full rounded-2xl bg-cover bg-center duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block'>
        <BsChevronCompactLeft size={30} onClick={prevSlide} />
      </div>
      {/* Right Arrow */}
      <div className='absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block'>
        <BsChevronCompactRight size={30} onClick={nextSlide} />
      </div>
      <div className='absolute inset-x-0 bottom-10 flex justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`${
              slideIndex !== currentIndex && 'text-opacity-50'
            } cursor-pointer text-2xl text-white`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

ImageSlider.propTypes = {
  slides: PropTypes.array,
  maxWidth: PropTypes.oneOf(['small', 'medium', 'large', 'xLarge']),
  height: PropTypes.oneOf(['small', 'medium', 'large', 'xLarge']),
};

ImageSlider.defaultProps = {
  maxWidth: 'medium',
  height: 'medium',
};

export default ImageSlider;
