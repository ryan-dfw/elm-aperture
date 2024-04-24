    const BookingForm = () => {
    return (
        <form name="booking" method="post" data-netlify="true" onSubmit={() => console.log('Form submitted')}>
            <div className="mb-3">
                <label>Name:</label>
                <input type="text" name="name" required />
            </div>
            <div className="mb-3">
                <label>Telephone Number:</label>
                <input type="tel" name="telNo" required/>
            </div>
            <div className="mb-3">
                <label>Email:</label>
                <input type="email" name="email" required/>
            </div>
            <div className="mb-3">
                <label>Photographer Requested:</label>
                <input type="text" name="photographerRequested"/>
            </div>
            <div className="mb-3">
                <label>Day Requested:</label>
                <input type="date" name="dayRequested" required/>
            </div>
            <div className="mb-3">
                <label>Hours Requested:</label>
                <input type="text" name="hoursRequested"/>
            </div>
            <div className="mb-3">
                <label>City:</label>
                <input type="text" name="city" required/>
            </div>
            <div className="mb-3">
                <label>Description of the Shoot:</label>
                <textarea name="description" required/>
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
    );
};

export default BookingForm;
