import BookingCard from "./BookingCard";

const BookingGrid = ({bookings}) => {

    const bookingsList = bookings.map((booking)=> {
        return <BookingCard booking={booking} key={booking._id}/>
    })
    console.log(bookingsList)

    return (
        <>
            {bookingsList}
        </>
    )
}

export default BookingGrid