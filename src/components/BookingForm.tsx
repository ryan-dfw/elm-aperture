import React, { useState, useEffect } from "react";
import { useContextValue } from "../contexts/Context";
import "../styles/Booking.css";

const BookingForm = () => {
    const { selectedDateTime, photographer } = useContextValue();
    const { start: contextStart = "", end: contextEnd = "", date: contextDate = "" } = selectedDateTime || {};

    let hoursString = "";
    if (contextStart && contextEnd) {
        hoursString = `from ${contextStart} to ${contextEnd}`;
    }

    const [formValues, setFormValues] = useState({
        date: contextDate,
        hoursRequested: hoursString,
        photographerRequested: photographer || "NoPreference" // Set default value to photographer or "NoPreference"
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => { // Union type
        const { name, value } = e.target;
        setFormValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        setFormValues(prevState => ({
            ...prevState,
            photographerRequested: photographer || "NoPreference" // Default to "NoPreference" if photographer is not available
        }));
    }, [photographer]);

    return (
        <form name="booking" method="post" data-netlify="true" action="/">
            <input type="hidden" name="form-name" value="booking" />

            <div className="mb-3 book-form-item">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div className="mb-3 book-form-item">
                <label htmlFor="telNo">Telephone Number:</label>
                <input type="tel" id="telNo" name="telNo" required />
            </div>
            <div className="mb-3 book-form-item">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="mb-3 book-form-item">
                <label htmlFor="photographerRequested">Photographer Requested:</label>
                <select
                    id="photographerRequested"
                    name="photographerRequested"
                    value={formValues.photographerRequested}
                    onChange={handleInputChange}
                >
                    <option value="NoPreference">No Preference</option>
                    <option value="Rain">Rain</option>
                    <option value="Scott">Scott</option>
                    <option value="Maivy">Maivy</option>
                    <option value="Meraki">Meraki</option>
                </select>
            </div>
            <div className="mb-3 book-form-item">
                <label htmlFor="dayRequested">Day Requested:</label>
                <input
                    type="date"
                    id="dayRequested"
                    name="date"
                    value={formValues.date}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mb-3 book-form-item">
                <label htmlFor="hoursRequested">Hours Requested:</label>
                <input
                    type="text"
                    id="hoursRequested"
                    name="hoursRequested"
                    value={formValues.hoursRequested}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mb-3 book-form-item">
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" required />
            </div>
            <div className="mb-3 book-form-item">
                <label htmlFor="description">Description of the Shoot:</label>
                <textarea id="description" name="description" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};

export default BookingForm;
``