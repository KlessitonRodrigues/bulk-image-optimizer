import ImageCompressor from './image-compressor.min.js';

export const ImageCompress = (bin: Blob) => {
  return new Promise<Blob>((resolve, reject) => {
    new ImageCompressor({
      file: bin,
      mimeType: bin.type,
      quality: 0.4,
      width: 1980,
      height: 1080,
      convertSize: Infinity,
      loose: true,
      redressOrientation: true,
      // maxWidth: 1920,
      // maxHeight: 1080,
      // minWidth: 500,
      // minHeight: 500,
      // beforeCompress: () => {},
      // beforeDraw: () => {},
      // afterDraw: () => {},
      success: (result: Blob) => {
        const binSize = (bin.size / 1024).toFixed(2);
        const resultSize = (result.size / 1024).toFixed(2);
        const ratio = (((bin.size - result.size) / bin.size) * 100).toFixed(2) + '%';
        console.log(`Image compressor: ${binSize} Kb -> ${resultSize} Kb, ratio: ${ratio}`);
        resolve(result);
      },
      error: reject,
    });
  });
};

export const downloadImage = (blob: Blob, name: string) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  URL.revokeObjectURL(url);
};

// https://www.npmjs.com/package/js-image-compressor
