import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Admin from '../models/Admin.js';

export const signup = async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const existingUser = await Admin.findOne({ username });
    if (existingUser) return res.status(400).json({ message: 'User already exists.' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new Admin({ username, password: hashedPassword, role });
    await admin.save();

    const token = jwt.sign({ _id: admin._id, role: admin.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.header('Authorization', token).send({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error, could not create user.' });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(400).json({ message: 'Invalid username or password.' });

    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword) return res.status(400).json({ message: 'Invalid username or password.' });

    const token = jwt.sign({ _id: admin._id, role: admin.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.header('Authorization', token).send({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error, could not log in.' });
  }
};

export const addAdmin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new Admin({ username, password: hashedPassword, role: 'admin' });
    await admin.save();
    res.status(201).send({ message: 'Admin created' });
  } catch (error) {
    res.status(500).json({ message: 'Server error, could not create admin.' });
  }
};
