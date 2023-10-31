import React from 'react';
import { IImage } from '../../types/types';

const Photo = ({ image }: { image: IImage }) => {
  // destructing the image object here
  const { id, imageUrl } = image || {};

  // rendering photo component here
  return (
    <div
      className={`group relative border border-gray-300 rounded-xl overflow-hidden cursor-pointer ${
        id === 1 && 'row-span-2 col-span-2'
      }`}
    >
      <img src={imageUrl} alt={`product ${id}`} />

      <input
        className='absolute top-5 left-5 cursor-pointer z-10 opacity-0 group-hover:opacity-100 duration-300'
        type='checkbox'
      />
      <div className='absolute h-full w-full bg-black/30 left-0 top-0 opacity-0 group-hover:opacity-100 duration-300'></div>
    </div>
  );
};

export default Photo;
