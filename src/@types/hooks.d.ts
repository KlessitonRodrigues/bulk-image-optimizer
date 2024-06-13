declare namespace Hooks {
  type UseTheme = {
    color: string;
    setColor: React.Dispatch<string>;
  };

  type UseImages = {
    images: Utils.ImageData[];
    setImages: React.Dispatch<Utils.ImageData[]>;
  };
}
