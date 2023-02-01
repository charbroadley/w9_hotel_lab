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

  return (
    <>
    <BookingsForm addBooking={addBooking}/>
    <BookingGrid bookings={bookings}/>
    </>
  );
}

export default App;
