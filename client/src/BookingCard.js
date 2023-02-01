const BookingCard = ({booking}) => {

    return (
        <>
        <p>Name: {booking.name}</p>
        <p>Email: {booking.email}</p>
        <p>Status: {booking.status}</p>
        </>

    )
}

export default BookingCard