import {deleteBooking} from "./BookingsService"
const BookingCard = ({booking, removeBooking}) => {

    console.log(booking)
    const handleDelete = () => {
        deleteBooking(booking._id)
        .then (() => {
            removeBooking(booking._id)
        })
    }
    
    return (
        <>
        <p><b>Name:</b> {booking.name}</p>
        <p><b>Email:</b> {booking.email}</p>
        <p><b>Status:</b> {booking.status}</p>
        <button onClick={handleDelete}>Delete Booking</button>
        <hr></hr>
        </>

    )
}

export default BookingCard