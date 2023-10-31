import { Gallery } from './ImageGallery.styles';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ photos, onClickImageItem }) => (
  <Gallery>
    {photos !== null &&
      photos.map(({ webformatURL, id, tags }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          tags={tags}
          smallUrl={webformatURL}
          onClickImageItem={onClickImageItem}
        />
      ))}
  </Gallery>
);

export default ImageGallery;
