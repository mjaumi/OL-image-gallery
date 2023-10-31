import React, { createContext, useContext, useMemo, useState } from 'react';
import { IImage } from '../types/types';

// datatype of the gallery context declared here
interface IGalleryContext {
  gallery: Array<IImage>;
  selectedImageCount: number;
  selectedImages: Array<number>;
  setSelectedImages: (arr: Array<number>) => void;
}

// creating the gallery context here
const GalleryContext = createContext<IGalleryContext | null>(null);

export default function GalleryContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // integration of react hooks here
  const [gallery, setGallery] = useState<Array<IImage>>([]);
  const [selectedImages, setSelectedImages] = useState<Array<number>>([]);

  // fetching the data from the json file here
  useMemo(() => {
    fetch('/images.json')
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);

  // rendering the context provider here
  return (
    <GalleryContext.Provider
      value={{
        gallery,
        selectedImageCount: 0,
        selectedImages,
        setSelectedImages,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
}

export const useGalleryContext = () => {
  return useContext(GalleryContext) as IGalleryContext;
};
