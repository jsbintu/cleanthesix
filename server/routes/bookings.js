import express from 'express';
import Booking from '../models/Booking.js';
import { authenticateToken, isAdmin } from '../middleware/auth.js';

const router = express.Router();

// Create a new booking
router.post('/', authenticateToken, async (req, res) => {
  try {
    const booking = new Booking({ ...req.body, user: req.user.userId });
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: 'Booking creation failed', error: error.message });
  }
});

// Get all bookings (admin only)
router.get('/', authenticateToken, isAdmin, async (req, res) => {
  try {
    const bookings = await Booking.find().populate('user', 'name email');
    res.json(bookings);
  } catch (error) {
    res.status(400).json({ message: 'Failed to fetch bookings', error: error.message });
  }
});

// Get user's bookings
router.get('/user', authenticateToken, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.userId });
    res.json(bookings);
  } catch (error) {
    res.status(400).json({ message: 'Failed to fetch user bookings', error: error.message });
  }
});

// Get booked slots
router.get('/slots', async (req, res) => {
  try {
    const bookings = await Booking.find({}, 'date time');
    const bookedSlots = bookings.map(booking => ({
      date: booking.date.toISOString().split('T')[0],
      time: booking.time
    }));
    res.json(bookedSlots);
  } catch (error) {
    res.status(400).json({ message: 'Failed to fetch booked slots', error: error.message });
  }
});

// Update booking status (admin only)
router.patch('/:id', authenticateToken, isAdmin, async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.json(booking);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update booking', error: error.message });
  }
});

export default router;