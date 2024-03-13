// imageUtils.js
const sharp = require('sharp');

const resizeImage = async (inputPath, outputPath, width, height) => {
  try {
    await sharp(inputPath)
      .resize(width, height)
      .toFile(outputPath);
    console.log('Image resized successfully.');
  } catch (error) {
    console.error('Error resizing image:', error);
  }
};

const convertImageFormat = async (inputPath, outputPath, format) => {
  try {
    await sharp(inputPath)
      .toFormat(format)
      .toFile(outputPath);
    console.log('Image format converted successfully.');
  } catch (error) {
    console.error('Error converting image format:', error);
  }
};

module.exports = {
  resizeImage,
  convertImageFormat,
};