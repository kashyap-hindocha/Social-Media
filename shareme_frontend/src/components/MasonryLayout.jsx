import React from 'react';
import Masonry from 'react-masonry-css';
import Pin from './Pin'

const breakPointsObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
}

const MasonryLayout = ({ pins }) => {
  return (
    <Masonry className="flex animate-slide-fwd" breakpointcols={breakPointsObj}>
      {pins?.map((pin) => <Pin key={pin._id} pin={pin} className="w-full" />)}
    </Masonry>
  )
}

export default MasonryLayout
