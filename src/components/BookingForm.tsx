import React, { useState, useEffect } from "react";
import { useContextValue } from "../contexts/Context";
import "../styles/pages/Booking.css";

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

    const [contactError, setContactError] = useState("");

    const [isSubmittingVisual, setIsSubmittingVisual] = useState(false);

    const handleSubmitVisual = () => {
        setIsSubmittingVisual(true);
        setTimeout(() => {
            setIsSubmittingVisual(false);
        }, 1400);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const email = String(formData.get("email") || "").trim();
        const telNo = String(formData.get("telNo") || "").trim();

        if (!email && !telNo) {
            setContactError("Please include either an email or phone number.");
            return;
        }

        setContactError("");
        handleSubmitVisual();

        await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData as any).toString(),
        });
        form.reset();
        setIsSubmitted(true);
    };

    const [isSubmitted, setIsSubmitted] = useState(false);


    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => { // Union type
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
        <main className={`booking-form ${isSubmittingVisual ? 'booking-form--pulse' : ''}`}>
            <div className="booking-header">
                <h1>Book or Inquire</h1>
                <p>all fields optional - let us know what you're looking for!</p>
            </div>

            <form name="booking" method="post" data-netlify="true" action="/" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="booking" />

                <div className="mb-3 book-form-item">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"/>
                </div>

                <div className="mb-3 book-form-item">
                    <label htmlFor="telNo">Telephone Number:</label>
                    <input type="tel" id="telNo" name="telNo"/>
                </div>

                <div className="mb-3 book-form-item">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email"/>
                </div>

                {contactError && (
                    <p className="booking-error">{contactError}</p>
                )}

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
                        <option value="Alejandro">Alejandro</option>
                        <option value="Maivy">Maivy</option>
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
                    />
                </div>

                <div className="mb-3 book-form-item">
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" name="city"/>
                </div>

                <div className="mb-3 book-form-item">
                    <label htmlFor="description">Description of the Shoot:</label>
                    <textarea id="description" name="description"></textarea>
                </div>

                <button type="submit" className="booking-submit">
                    Submit
                </button>

                <div className={`booking-status ${isSubmitted ? 'show' : ''}`}>
                    thank you! someone will get back to you soon.
                </div>
            </form>
        </main>
    );
};

export default BookingForm;
``