import React, { useEffect, useRef } from 'react';
import Sortable from 'sortablejs';
import Photo from '../Photo/Photo';
import AddImage from '../AddImage/AddImage';
import { useGalleryContext } from '../../context/GalleryContextProvider';

const Gallery = () => {
  // integration of react hooks here
  const { gallery } = useGalleryContext();

  // integration of react hooks here
  const galleryRef = useRef<HTMLElement>(null);

  // integration of sortable library to drag and sort elements here
  useEffect(() => {
    new Sortable(galleryRef.current as HTMLElement, {
      animation: 250,
      delay: 2,
      delayOnTouchOnly: true,
      touchStartThreshold: 2,
      filter: '.no-drag',
      onMove: (e) => {
        return e.related.className.indexOf('no-drag') === -1;
      },
    });
  }, []);

  // rendering the gallery component here
  return (
    <section
      ref={galleryRef}
      className='w-[90%] md:w-4/5 max-w-[1500px] mx-auto py-10 grid md:grid-cols-3 lg:grid-cols-5 gap-8'
    >
      {gallery.map((image, index) => (
        <Photo key={image.id} data-id={image.id} image={image} />
      ))}

      <AddImage />
    </section>
  );
};

export default Gallery;
