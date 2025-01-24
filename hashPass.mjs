import bcrypt from 'bcryptjs';
const saltRounds = 10;
const plainPassword = 'MongoDb_2024.melory';

async function hashPassword(password) {
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    console.log('Hashed password:', hash);
  } catch (err) {
    console.error('Error hashing password:', err);
  }
}

hashPassword(plainPassword);