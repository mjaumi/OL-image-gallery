import React from 'react';
import { BsImage } from 'react-icons/bs';

const AddImage = () => {
  // rendering add image section here
  return (
    <div className='bg-gray-100 rounded-xl flex items-center justify-center border border-dashed border-gray-300 cursor-pointer hover:opacity-60 duration-300'>
      <div>
        <BsImage className='h-6 w-6 mx-auto mb-3' />
        <p className='font-semibold text-lg text-center'>Add Images</p>
      </div>
    </div>
  );
};

export default AddImage;
