import React, { useContext } from 'react';
import Photo from '../Photo/Photo';
import { GalleryContext } from '../../context/GalleryContextProvider';

const Gallery = () => {
  // integration of react hooks here
  const context = useContext(GalleryContext);

  // rendering the gallery component here
  return (
    <section className='w-[90%] md:w-4/5 max-w-[1500px] mx-auto py-10 grid md:grid-cols-3 lg:grid-cols-5 gap-8'>
      {context?.gallery.map((image) => (
        <Photo key={image.id} image={image} />
      ))}
    </section>
  );
};

export default Gallery;
