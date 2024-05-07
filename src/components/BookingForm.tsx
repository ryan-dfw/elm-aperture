import { useContextValue } from '../contexts/Context';
import '../styles/Booking.css';

const BookingForm = () => {
    const { selectedDateTime } = useContextValue();
    const { date = '', start = '', end = '' } = selectedDateTime || {};
    console.log(selectedDateTime);

    return (
        <form name="booking" method="post" data-netlify="true" action="/">
            <input type="hidden" name="form-name" value="booking" />

            <div className="mb-3 book-form-item">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div className="mb-3 book-form-item">
                <label htmlFor="telNo">Telephone Number:</label>
                <input type="tel" id="telNo" name="telNo" required/>
            </div>
            <div className="mb-3 book-form-item">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div className="mb-3 book-form-item">
                <label htmlFor="photographerRequested">Photographer Requested:</label>
                <select id="photographerRequested" name="photographerRequested">
                    <option value="No Preference">No Preference</option>
                    <option value="Rain">Rain</option>
                    <option value="Scott">Scott</option>
                    <option value="Maivy">Maivy</option>
                    <option value="Meraki">Meraki</option>
                </select>
            </div>
            <div className="mb-3 book-form-item">
                <label htmlFor="dayRequested">Day Requested:</label>
                <input type="date" id="dayRequested" name="dayRequested" value={date} required/>
            </div>
            <div className="mb-3 book-form-item">
                <label htmlFor="hoursRequested">Hours Requested:</label>
                <input
                    type="text"
                    id="hoursRequested"
                    name="hoursRequested"
                    value={`${start} to ${end}`}
                />
            </div>
            <div className="mb-3 book-form-item">
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" required/>
            </div>
            <div className="mb-3 book-form-item">
                <label htmlFor="description">Description of the Shoot:</label>
                <textarea id="description" name="description" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
    );
};

export default BookingForm;
