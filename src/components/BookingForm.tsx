import '../styles/Booking.css'

const BookingForm = () => {
    return (
        <form name="booking" method="post" data-netlify="true" action="/">
            <div className="mb-3 book-form-item">
                <label>Name:</label>
                <input type="text" name="name" required />
            </div>
            <div className="mb-3 book-form-item">
                <label>Telephone Number:</label>
                <input type="tel" name="telNo" required/>
            </div>
            <div className="mb-3 book-form-item">
                <label>Email:</label>
                <input type="email" name="email" required/>
            </div>
            <div className="mb-3 book-form-item">
                <label>Photographer Requested:</label>
                <select name="photographerRequested">
                    <option value="No Preference">No Preference</option>
                    <option value="Rain">Rain</option>
                    <option value="Scott">Scott</option>
                    <option value="Maivy">Maivy</option>
                    <option value="Meraki">Meraki</option>
                </select>
            </div>
            <div className="mb-3 book-form-item">
                <label>Day Requested:</label>
                <input type="date" name="dayRequested" required/>
            </div>
            <div className="mb-3 book-form-item">
                <label>Hours Requested:</label>
                <input type="text" name="hoursRequested"/>
            </div>
            <div className="mb-3 book-form-item">
                <label>City:</label>
                <input type="text" name="city" required/>
            </div>
            <div className="mb-3 book-form-item">
                <label>Description of the Shoot:</label>
                <textarea name="description" required/>
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
    );
};

export default BookingForm;
