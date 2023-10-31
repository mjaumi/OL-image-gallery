import React, { useContext } from 'react';
import { GalleryContext } from '../../context/GalleryContextProvider';

const Header = () => {
  // integration of react hooks here
  const context = useContext(GalleryContext);

  // rendering the header component here
  return (
    <header className='sticky top-0 h-[80px] border-b border-gray-300 bg-white z-50'>
      <nav className='w-[90%] md:w-4/5 max-w-[1500px] h-full mx-auto flex items-center justify-between'>
        <h1 className='font-black text-2xl'>Gallery</h1>
        <button
          className='font-semibold text-red-600 hover:opacity-70 duration-300 disabled:cursor-not-allowed disabled:opacity-60'
          disabled={!context?.selectedImages}
        >
          Delete files
        </button>
      </nav>
    </header>
  );
};

export default Header;
