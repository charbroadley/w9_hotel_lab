import './App.css';
import {getBookings} from "./BookingsService.js"
import BookingGrid from './BookingsGrid';
import {useState, useEffect} from "react"
import BookingsForm from './BookingsForm';

function App() {

  const [bookings, setBookings] = useState([])

  useEffect(() => {
    getBookings()
    .then((allBookings) => {
      setBookings(allBookings)
    })
  }, [])

  const addBooking = (booking) => {
    setBookings([...bookings, booking])
  }

  const removeBooking = (id) => {
    const bookingsToKeep = bookings.filter(booking => booking._id !== id)
    setBookings(bookingsToKeep)
  }

  return (
    <>
    <BookingsForm addBooking={addBooking}/>
    <BookingGrid bookings={bookings} removeBooking={removeBooking}/>
    </>
  );
}

export default App;
