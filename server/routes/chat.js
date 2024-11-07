import express from 'express';
import ChatMessage from '../models/ChatMessage.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Send a new message
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { bookingId, message } = req.body;
    const chatMessage = new ChatMessage({
      booking: bookingId,
      sender: req.user.userId,
      message,
    });
    await chatMessage.save();
    res.status(201).json(chatMessage);
  } catch (error) {
    res.status(400).json({ message: 'Failed to send message', error: error.message });
  }
});

// Get messages for a specific booking
router.get('/:bookingId', authenticateToken, async (req, res) => {
  try {
    const messages = await ChatMessage.find({ booking: req.params.bookingId })
      .populate('sender', 'name')
      .sort('timestamp');
    res.json(messages);
  } catch (error) {
    res.status(400).json({ message: 'Failed to fetch messages', error: error.message });
  }
});

export default router;