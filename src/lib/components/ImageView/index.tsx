import { Card } from 'src/lib/base/Styled/Containers';
import { Image } from 'src/lib/base/Styled/Images';

const ImageView = (props: Props.ImageView) => {
  const { image } = props;

  return (
    <Card>
      <h6>{image.name}</h6>
      <Image w="10rem" src={image.originUrl} />
    </Card>
  );
};

export default ImageView;
