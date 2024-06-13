import { PropsWithChildren, createContext, useContext, useMemo, useState } from 'react';

// @ts-ignore
const ImagesContext = createContext<Hooks.UseImages>(null);

export const ImagesProvider = (props: PropsWithChildren) => {
  const [images, setImages] = useState<Utils.ImageData[]>([]);

  const value = useMemo<Hooks.UseImages>(() => {
    return {
      images,
      setImages,
    };
  }, [images]);

  return <ImagesContext.Provider value={value}>{props.children}</ImagesContext.Provider>;
};

const useImages = () => useContext(ImagesContext);

export default useImages;
