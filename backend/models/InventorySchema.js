import mongoose from 'mongoose';

const detailsSchema = new mongoose.Schema({
  VanType: {
    type: String,
    enum: ['new', 'used'],
    required: true
  },
  EngineNum: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  battery: {
    type: String,
    required: true
  },
  sleepCapacity: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
}, { _id: false }); 

const inventorySchema = new mongoose.Schema({
  model: {
    type: String,
    required: true
  },
  ownerName: {
    type: String,
    required: true
  },
  image: {
    type: [String],
    default: []
  },
  price: {
    type: Number,
    required: true
  },
  emi: {
    type: Number,
    required: true
  },
  details: detailsSchema
});

export const Inventory = mongoose.model("Inventory", inventorySchema);
