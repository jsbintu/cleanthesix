import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  type: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  duration: { type: Number, required: true }
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;