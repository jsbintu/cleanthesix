import React, { useState, useEffect } from 'react';
import { format, addDays, startOfWeek, getDay, addWeeks } from 'date-fns';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Booking: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [serviceType, setServiceType] = useState<'residential' | 'commercial' | 'airbnb'>('residential');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [duration, setDuration] = useState(serviceType === 'residential' ? 3 : 2);
  const [error, setError] = useState('');
  const [bookedSlots, setBookedSlots] = useState<{ date: string; time: string }[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBookedSlots();
  }, []);

  const fetchBookedSlots = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/bookings/slots', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setBookedSlots(data);
      } else {
        console.error('Failed to fetch booked slots');
      }
    } catch (error) {
      console.error('Error fetching booked slots:', error);
    }
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 8; hour <= 17; hour++) {
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const hour12 = hour > 12 ? hour - 12 : hour;
      slots.push(`${hour12}:00 ${ampm}`);
      slots.push(`${hour12}:30 ${ampm}`);
    }
    return slots;
  };

  const generateWeekDates = () => {
    const today = new Date();
    const weekStart = startOfWeek(today, { weekStartsOn: 1 });
    const twoWeeks = Array.from({ length: 14 }, (_, i) => addDays(weekStart, i));
    return [twoWeeks.slice(0, 7), twoWeeks.slice(7)];
  };

  const isSlotBooked = (date: Date, time: string) => {
    const formattedDate = format(date, 'yyyy-MM-dd');
    return bookedSlots.some(slot => slot.date === formattedDate && slot.time === time);
  };

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return cleaned;
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      setError('Please select a date and time for your booking.');
      return;
    }
    if (!phoneNumber || phoneNumber.replace(/\D/g, '').length !== 10) {
      setError('Please enter a valid phone number.');
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          date: selectedDate,
          time: selectedTime,
          type: serviceType,
          address,
          phoneNumber,
          duration
        }),
      });
      if (response.ok) {
        navigate('/customer');
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to create booking. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  const calculateTotalCost = () => {
    const hourlyRate = 55;
    return hourlyRate * duration;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Book a Cleaning</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Service Type</label>
              <div className="flex space-x-4">
                {['residential', 'commercial', 'airbnb'].map((type) => (
                  <label key={type} className="inline-flex items-center">
                    <input
                      type="radio"
                      value={type}
                      checked={serviceType === type}
                      onChange={() => {
                        setServiceType(type as any);
                        setDuration(type === 'residential' ? 3 : 2);
                      }}
                      className="form-radio"
                    />
                    <span className="ml-2 capitalize">{type}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Select Date</label>
              {generateWeekDates().map((week, weekIndex) => (
                <div key={weekIndex} className="grid grid-cols-7 gap-2 mb-2">
                  {week.map((date) => (
                    <button
                      key={date.toISOString()}
                      type="button"
                      onClick={() => setSelectedDate(date)}
                      className={`p-2 text-center rounded ${
                        selectedDate && format(selectedDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100'
                      }`}
                    >
                      {format(date, 'EEE')}<br />
                      {format(date, 'd')}
                    </button>
                  ))}
                </div>
              ))}
            </div>
            {selectedDate && (
              <div className="mb-4">
                <label className="block mb-2 font-semibold">Select Time</label>
                <div className="grid grid-cols-4 gap-2">
                  {generateTimeSlots().map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 text-center rounded ${
                        selectedTime === time ? 'bg-blue-500 text-white' : 'bg-gray-100'
                      } ${isSlotBooked(selectedDate, time) ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={isSlotBooked(selectedDate, time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Duration (hours)</label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(Math.max(serviceType === 'residential' ? 3 : 2, parseInt(e.target.value)))}
                min={serviceType === 'residential' ? 3 : 2}
                step={1}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Phone Number</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className="w-full p-2 border rounded"
                placeholder="(123) 456-7890"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Address to be Cleaned</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Enter address"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
              disabled={!selectedDate || !selectedTime || !address || !phoneNumber}
            >
              Book Now
            </button>
          </form>
        </div>
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <ul className="space-y-2">
              <li className="flex items-center"><MapPin size={20} className="mr-2" /> 123 Clean Street, Mississauga, ON L5B 1M3</li>
              <li className="flex items-center"><Phone size={20} className="mr-2" /> (289) 460-0829</li>
              <li className="flex items-center"><Mail size={20} className="mr-2" /> info@cleanthesix.com</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
            {selectedDate && selectedTime ? (
              <div>
                <p><strong>Date:</strong> {format(selectedDate, 'MMMM d, yyyy')}</p>
                <p><strong>Time:</strong> {selectedTime}</p>
                <p><strong>Service Type:</strong> {serviceType}</p>
                <p><strong>Duration:</strong> {duration} hours</p>
                <p><strong>Total Cost:</strong> ${calculateTotalCost()}</p>
                {phoneNumber && <p><strong>Phone:</strong> {phoneNumber}</p>}
                {address && <p><strong>Address:</strong> {address}</p>}
              </div>
            ) : (
              <p>Please select a date and time for your booking.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;