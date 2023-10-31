import React from 'react';

import { GalleryItem, GalleryImage } from './ImageGalleryItem.styles';


const ImageGalleryItem = ({id, smallUrl, tags, onClickImageItem }) => (
  <GalleryItem
      key={id}
      data-id={id}
      onClick={onClickImageItem}
  >
      <GalleryImage src={smallUrl} alt={tags} data-id={id} />
  </GalleryItem>
);


export default ImageGalleryItem;
