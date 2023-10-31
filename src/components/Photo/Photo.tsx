import { BsCheck2 } from 'react-icons/bs';
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

      <div className='absolute top-5 left-5 z-10'>
        <input id={`checkbox_${id}`} className='peer hidden' type='checkbox' />
        <label
          className='block rounded border border-blue-400 bg-white peer-checked:bg-blue-400 cursor-pointer duration-300 opacity-0 group-hover:opacity-100'
          htmlFor={`checkbox_${id}`}
        >
          <BsCheck2 className='text-white h-5 w-5' />
        </label>
      </div>
      <div className='absolute h-full w-full bg-black/40 left-0 top-0 opacity-0 group-hover:opacity-100 duration-300'></div>
    </div>
  );
};

export default Photo;
