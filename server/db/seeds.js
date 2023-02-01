use bookings_hub
db.dropDatabase()

db.bookings.insertMany([
    {
        name: "Jo",
        email: "jo@hotmail.com",
        status: "pending"
    },
    {
        name: "Dan",
        email: "dan@gmail.com",
        status: "pending"
    },
    {
        name: "Dave",
        email: "dave@aol.com",
        status: "pending"
    }
]);
