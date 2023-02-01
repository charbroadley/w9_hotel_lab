import './App.css';
import {getBookings} from "./BookingsService.js"
import BookingGrid from './BookingsGrid';
import {useState, useEffect} from "react"

function App() {

  const [bookings, setBookings] = useState([])

  useEffect(() => {
    getBookings()
    .then((allBookings) => {
      setBookings(allBookings)
    })
  }, [])


console.log (bookings)


  return (
    <>
    <BookingGrid bookings={bookings}/>
    </>
  );
}

export default App;
