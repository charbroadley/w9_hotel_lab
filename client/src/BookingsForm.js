import React, {useState} from "react"
import {postBooking} from "./BookingsService"

const BookingsForm = ({addBooking}) => {

    const [formData, setFormData] = useState (
        {
        name: "",
        email: "",
        status: "",
    })

    const onChange = (evt) => {
        const newFormData = Object.assign({}, formData)
        newFormData[evt.target.name] = evt.target.value
        setFormData(newFormData)
    }

    const onSubmit = (evt) => {
        evt.preventDefault(); 
        postBooking(formData)
            .then((data) => {
                addBooking(data)
            })
        setFormData({
            name: "",
            email: "",
            status: "",
            })
        }

    return (

        <form onSubmit={onSubmit} id="bookings-form">
            <h2>Add a new booking:</h2>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        onChange={onChange}
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}/>
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        onChange={onChange}
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}/>
                </div>

                <div>
                    <label htmlFor="status">Status:</label>
                    <input
                        onChange={onChange}
                        type="text"
                        id="status"
                        name="status"
                        value={formData.status}/>
                </div>

                <input
                    type="submit"
                    value="save"
                    id="save"/>
        </form>

    )
}

export default BookingsForm