import React, { createContext, useMemo, useState } from 'react';
import { IImage } from '../types/types';

// datatype of the gallery context declared here
interface IGalleryContext {
  gallery: Array<IImage>;
  selectedImages: number;
}

// creating the gallery context here
export const GalleryContext = createContext<IGalleryContext | null>(null);

export default function GalleryContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // integration of react hooks here
  const [gallery, setGallery] = useState<Array<IImage>>([]);

  // fetching the data from the json file here
  useMemo(() => {
    fetch('/images.json')
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);

  // rendering the context provider here
  return (
    <GalleryContext.Provider value={{ gallery, selectedImages: 0 }}>
      {children}
    </GalleryContext.Provider>
  );
}
