import * as React from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import img4 from './img3.jpg';

export default function Home() {
  return (
    <ImageList sx={{ width: 1459, height: 450 }} cols={1} rowHeight={450} >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={img4}
            srcSet={img4}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
];
