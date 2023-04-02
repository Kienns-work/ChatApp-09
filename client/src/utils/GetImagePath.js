import { IMAGES } from '../constants/ImageConstants';

export const getImagePath = (imageName) => {
    return IMAGES[imageName];
};