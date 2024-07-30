import Collection from '../models/Collection.js';

export const getCollections = async (req, res) => {
  try {
    const collections = await Collection.find();
    res.json(collections);
  } catch (error) {
    res.status(500).json({ message: 'Server error, could not retrieve collections.' });
  }
};

export const createCollection = async (req, res) => {
  try {
    const collection = new Collection(req.body);
    await collection.save();
    res.status(201).json(collection);
  } catch (error) {
    res.status(500).json({ message: 'Server error, could not create collection.' });
  }
};
