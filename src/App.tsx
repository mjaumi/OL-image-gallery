import { useEffect, useState } from 'react';

interface IImage {
  id: number;
  imageUrl: string;
  isSelected: boolean;
}

function App() {
  const [images, setImages] = useState<IImage[] | []>([]);

  useEffect(() => {
    fetch('/images.json')
      .then((res) => res.json())
      .then((data) => {
        setImages(data as IImage[]);
      });
  }, []);

  return (
    <main className='font-poppins'>
      <h1 className='text-red-400 text-4xl text-center'>hig</h1>

      <img src={images[0]?.imageUrl} alt='phone' />
    </main>
  );
}

export default App;
