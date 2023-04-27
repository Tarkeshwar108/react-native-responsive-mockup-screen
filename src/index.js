// import modules
import { widthPercentageToDP, heightPercentageToDP } from './tool';

// Convert width pixel to dp on the basis of wireFrame width.
export function widthPixelToDp(dimension, wireFrameWidth) {
  return Promise.resolve(
    widthPercentageToDP((dimension / wireFrameWidth) * 100 + '%')
  );
}

// Convert height pixel to dp on the basis of wireFrame height.
export function heightPixelToDp(dimension, wireFrameHeight) {
  return Promise.resolve(
    heightPercentageToDP((dimension / wireFrameHeight) * 100 + '%')
  );
}
