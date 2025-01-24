const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  halls: { type: Number, required: true },
  kitchen: { type: Boolean, default: true },
  balconies: { type: Boolean, default: true },
  parking: { type: Boolean, default: false },
  floors: { type: Number, default: 1 },
  lift: { type: Boolean, default: false }
});

const apartmentSchema = new mongoose.Schema({
  bathrooms: { type: Number, required: true },
  balconies: { type: Boolean, default: true },
  floorNumber: { type: Number, required: true },
  totalFloors: { type: Number, required: true },
  parking: { type: Boolean, default: false },
  lift: { type: Boolean, default: false }
});

const plotSchema = new mongoose.Schema({
  plotType: { type: String, enum: ['Residential', 'Commercial', 'Industrial', 'Mixed-Use'], required: true },
});

const commercialSpaceSchema = new mongoose.Schema({
  parking: { type: Boolean, default: false },
  lift: { type: Boolean, default: false },
  isWheelchairAccessible: { type: Boolean, default: false }
});

const officeSchema = new mongoose.Schema({
  conferenceRoom: { type: Boolean, default: true },
  meetingRoom: { type: Boolean, default: true },
  waitingRoom: { type: Boolean, default: false },
  parking: { type: Boolean, default: false },
  lift: { type: Boolean, default: false },
  isWheelchairAccessible: { type: Boolean, default: false }
});

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: function () { return this.rent === false; } },
  pricePerSqFt: { type: Number, required: function () { return this.rent === false; } },
  rent: { type: Boolean, required: true },
  status: { type: String, enum: ['Available','Booked'], default: 'Available' },
  location: { type: String, required: true },
  landArea: { type: Number, required: true },
  imageUrl: [{ type: String }],
  waterSupply: { type: Boolean, default: false, required: true  },
  electricitySupply: { type: Boolean, default: false, required: true  },
  longDescription: { type: String },
  category: {
    type: String,
    enum: ['House', 'Apartment', 'Plot', 'Commercial Space', 'Office'],
    required: true
  },
  houseDetails: {
    type: houseSchema,
    required: function () { return this.category === 'House'; }
  },
  apartmentDetails: {
    type: apartmentSchema,
    required: function () { return this.category === 'Apartment'; }
  },
  plotDetails: {
    type: plotSchema,
    required: function () { return this.category === 'Plot'; }
  },
  commercialSpaceDetails: {
    type: commercialSpaceSchema,
    required: function () { return this.category === 'Commercial Space'; }
  },
  officeDetails: {
    type: officeSchema,
    required: function () { return this.category === 'Office'; }
  },

  // Lease Fields when rent is true
  monthlyRent: {
    type: Number,
    required: function () { return this.rent === true; }
  },
  deposit: {
    type: Number,
    required: function () { return this.rent === true; }
  },
  maintenanceCost: {
    type: Number,
    required: function () { return this.rent === true; }
  },
  leaseDuration: {
    type: Number,
    required: function () { return this.rent === true; }
  },
  leaseType: {
    type: String,
    enum: ['Fixed', 'Negotiable', 'Percentage'],
    required: function () { return this.rent === true; }
  },

  furnishingStatus: {
    type: String,
    enum: ['Not Specified','Unfurnished', 'Semi-Furnished', 'Fully-Furnished'],
    default: 'Not Specified',
    required: false
  }
});

const Property = mongoose.models.Property || mongoose.model('Property', propertySchema);
module.exports = Property;