import Image from '../image/image';

type ImageListProps = {
  images: string[];
  type: string;
}

function ImageList({images, type}: ImageListProps): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((image) => <Image image={image} type={type} key={image}/>)}
      </div>
    </div>
  );
}

export default ImageList;
