import React from 'react';

const Header = () => {
  // rendering the header component here
  return (
    <header className='h-[80px] border-b border-gray-300r'>
      <nav className='w-4/5 h-full mx-auto flex items-center justify-between'>
        <h1 className='font-black text-2xl'>Gallery</h1>
        <button className='font-semibold text-red-600 hover:opacity-70 duration-300'>
          Delete files
        </button>
      </nav>
    </header>
  );
};

export default Header;
