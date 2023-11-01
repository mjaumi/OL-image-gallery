import React from 'react';
import { BsImage } from 'react-icons/bs';

const AddImage = () => {
  // rendering add image section here
  return (
    <div
      className='relative group min-h-[150px] bg-gray-100 rounded-xl flex items-center justify-center border border-dashed border-gray-300 cursor-pointer overflow-hidden no-drag'
      draggable='false'
    >
      <div>
        <BsImage className='h-6 w-6 mx-auto mb-3' />
        <p className='font-semibold text-lg text-center'>Add Images</p>
      </div>
      <div className='absolute h-full w-full bg-black/30 left-0 top-0 opacity-0 group-hover:opacity-100 duration-300'></div>
    </div>
  );
};

export default AddImage;
