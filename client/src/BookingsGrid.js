import BookingCard from "./BookingCard";

const BookingGrid = ({bookings, removeBooking}) => {

    const bookingsList = bookings.map((booking)=> {
        return <BookingCard booking={booking} key={booking._id} removeBooking={removeBooking}/>
    })
    console.log(bookingsList)

    return (
        <>
            {bookingsList}
        </>
    )
}

export default BookingGrid