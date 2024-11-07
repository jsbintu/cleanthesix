import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

interface Booking {
  _id: string;
  date: string;
  time: string;
  type: string;
  status: string;
  address: string;
  user: {
    name: string;
    email: string;
  };
}

const AdminPortal: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
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

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/bookings/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ status: newStatus })
      });
      if (response.ok) {
        fetchBookings();
      } else {
        console.error('Failed to update booking status');
      }
    } catch (error) {
      console.error('Error updating booking status:', error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Portal</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Manage Bookings</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Time</th>
                <th className="p-2 text-left">Type</th>
                <th className="p-2 text-left">Address</th>
                <th className="p-2 text-left">Customer</th>
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
                  <td className="p-2">{booking.user.name}<br/>{booking.user.email}</td>
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
                    <select 
                      value={booking.status}
                      onChange={(e) => handleStatusChange(booking._id, e.target.value)}
                      className="border rounded p-1"
                    >
                      <option value="Confirmed">Confirm</option>
                      <option value="Completed">Complete</option>
                      <option value="Cancelled">Cancel</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;