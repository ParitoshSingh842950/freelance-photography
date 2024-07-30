import Image from '../models/Image.js';

export const getImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: 'Server error, could not retrieve images.' });
  }
};

export const createImage = async (req, res) => {
  try {
    const image = new Image(req.body);
    await image.save();
    res.status(201).json(image);
  } catch (error) {
    res.status(500).json({ message: 'Server error, could not create image.' });
  }
};
