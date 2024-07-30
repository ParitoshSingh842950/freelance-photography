import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  collection: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Collection',
    required: true
  },
  size: {
    type: String,
    required: true
  },
  canvas: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const Image = mongoose.model('Image', imageSchema);
export default Image;
