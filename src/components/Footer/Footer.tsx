import React from 'react';

const Footer = () => {
  // rendering the footer component here
  return (
    <footer className='p-4 text-center border-t border-gray-300'>
      <p className='text-sm'>
        Made with ❤️ by{' '}
        <a
          className='underline text-blue-400 hover:opacity-70 duration-300'
          href='https://github.com/mjaumi'
          target='_blank'
          rel='noreferrer'
        >
          Milhan Joardar Aumi
        </a>
      </p>
    </footer>
  );
};

export default Footer;
