import React from 'react';
import Photo from '../Photo/Photo';
import { useGalleryContext } from '../../context/GalleryContextProvider';
import AddImage from '../AddImage/AddImage';

const Gallery = () => {
  // integration of react hooks here
  const { gallery } = useGalleryContext();

  // rendering the gallery component here
  return (
    <section className='w-[90%] md:w-4/5 max-w-[1500px] mx-auto py-10 grid md:grid-cols-3 lg:grid-cols-5 gap-8'>
      {gallery.map((image) => (
        <Photo key={image.id} image={image} />
      ))}

      <AddImage />
    </section>
  );
};

export default Gallery;
