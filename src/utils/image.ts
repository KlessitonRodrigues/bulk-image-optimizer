import { downloadImage } from './imageOptimizer';

export const canvasRef = (canvas: HTMLCanvasElement) => {
  const file = null;
  if (!canvas || !file) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const url = URL.createObjectURL(file);
  const img = new Image();
  img.src = url;
  img.style.width = '100%';
  img.style.height = '100%';
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);
    ctx.filter = 'brightness(50%)';
    canvas.toBlob(blob => blob && downloadImage(blob, 'image'), file.type);
  };
};
