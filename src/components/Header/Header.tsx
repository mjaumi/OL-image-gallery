import React from 'react';
import { useGalleryContext } from '../../context/GalleryContextProvider';
import { BsCheck2 } from 'react-icons/bs';

const Header = () => {
  // integration of react hooks here
  const { gallery, setGallery, selectedImages, setSelectedImages } =
    useGalleryContext();

  // handler function to handle deleting images feature
  const deleteSelectedImagesHandler = () => {
    setGallery(gallery.filter((image) => !selectedImages.includes(image.id)));
    setSelectedImages([]);
  };

  // rendering the header component here
  return (
    <header className='sticky top-0 h-[80px] border-b border-gray-300 bg-white z-50'>
      <nav className='w-[90%] md:w-4/5 max-w-[1500px] h-full mx-auto flex items-center justify-between'>
        {selectedImages.length === 0 ? (
          <h1 className='font-black text-2xl'>Gallery</h1>
        ) : (
          <div className='flex items-center justify-between w-full'>
            <div className='flex items-center gap-3'>
              <div className='rounded border border-blue-400 bg-blue-400'>
                <BsCheck2 className='text-white h-5 w-5' />
              </div>
              <h1 className='font-black text-2xl'>
                {selectedImages.length} Files selected
              </h1>
            </div>

            <button
              onClick={deleteSelectedImagesHandler}
              className='font-semibold text-red-600 hover:opacity-70 duration-300'
            >
              Delete files
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
