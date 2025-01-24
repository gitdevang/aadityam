import mongoose from 'mongoose';

const connectToDatabase = async () => {
  // If a connection already exists, avoid reconnecting
  if (mongoose.connections[0].readyState) {
    console.log('Already connected to the database.');
    return;
  }

  try {
    console.log('Attempting to connect to the database...');
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Successfully connected to the database.');
  } catch (error) {
    console.error('Failed to connect to the database:', error.message);
    throw new Error('Failed to connect to the database');
  }
};

export default connectToDatabase;
