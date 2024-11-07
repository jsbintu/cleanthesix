import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

interface Booking {
  _id: string;
  date: string;
  time: string;
  type: string;
  status: string;
  address: string;
}

const CustomerPortal: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/bookings/user', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setBookings(data);
      } else {
        console.error('Failed to fetch bookings');
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const handleCancelBooking = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/bookings/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ status: 'Cancelled' })
      });
      if (response.ok) {
        fetchBookings();
      } else {
        console.error('Failed to cancel booking');
      }
    } catch (error) {
      console.error('Error cancelling booking:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Customer Portal</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Bookings</h2>
        {bookings.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Date</th>
                  <th className="p-2 text-left">Time</th>
                  <th className="p-2 text-left">Type</th>
                  <th className="p-2 text-left">Address</th>
                  <th className="p-2 text-left">Status</th>
                  <th className="p-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map(booking => (
                  <tr key={booking._id} className="border-b">
                    <td className="p-2">{format(new Date(booking.date), 'MMM d, yyyy')}</td>
                    <td className="p-2">{booking.time}</td>
                    <td className="p-2">{booking.type}</td>
                    <td className="p-2">{booking.address}</td>
                    <td className="p-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold
                        ${booking.status === 'Confirmed' ? 'bg-green-200 text-green-800' :
                          booking.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' :
                          booking.status === 'Completed' ? 'bg-blue-200 text-blue-800' :
                          'bg-red-200 text-red-800'}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="p-2">
                      {booking.status !== 'Cancelled' && booking.status !== 'Completed' && (
                        <button
                          onClick={() => handleCancelBooking(booking._id)}
                          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-300"
                        >
                          Cancel
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>You have no bookings at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default CustomerPortal;