const BookingCard = ({booking}) => {

    return (
        <>
        <p><b>Name:</b> {booking.name}</p>
        <p><b>Email:</b> {booking.email}</p>
        <p><b>Status:</b> {booking.status}</p>
        </>

    )
}

export default BookingCard