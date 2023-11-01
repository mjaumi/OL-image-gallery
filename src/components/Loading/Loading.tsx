import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
  // rendering loading component here
  return (
    <section className='h-screen flex items-center justify-center'>
      <ReactLoading type='bubbles' color='#000000' height={150} width={150} />
    </section>
  );
};

export default Loading;
