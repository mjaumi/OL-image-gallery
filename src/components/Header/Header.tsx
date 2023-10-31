import React, { useContext } from 'react';
import { GalleryContext } from '../../context/GalleryContextProvider';

const Header = () => {
  // integration of react hooks here
  const context = useContext(GalleryContext);

  // rendering the header component here
  return (
    <header className='h-[80px] border-b border-gray-300r'>
      <nav className='w-4/5 h-full mx-auto flex items-center justify-between'>
        <h1 className='font-black text-2xl'>
          Gallery {context?.selectedImages}
        </h1>
        <button className='font-semibold text-red-600 hover:opacity-70 duration-300'>
          Delete files
        </button>
      </nav>
    </header>
  );
};

export default Header;
