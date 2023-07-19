import React, {useState, useRef} from 'react';
import MealSchedule from './MealSchedule';

function GuestForm() {
    const [guestList, setGuestList] = useState([]);
    const guestNameRef = useRef(null);
    const checkinDateRef = useRef(null);
    const checkoutDateRef = useRef(null);

    const handleAddGuest = () => {
        const guestName = guestNameRef.current.value;
        const checkinDate = new Date(checkinDateRef.current.value);
        const checkoutDate = new Date(checkoutDateRef.current.value);
    
        if (!guestName || !checkinDate || !checkoutDate) {
          alert("Please enter all the fields");
          return;
        }
    
        // Create an array with all the dates between checkinDate and checkoutDate
        const dateList = [];
        let currentDate = new Date(checkinDate);
        while (currentDate <= checkoutDate) {
          dateList.push(new Date(currentDate).toISOString().slice(0, 10));
          currentDate.setDate(currentDate.getDate() + 1);
        }
    
        // Add the guest with dates to the guestList
        const newGuest = {
          name: guestName,
          dates: dateList,
        };
        setGuestList((prevGuests) => [...prevGuests, newGuest]);
      };
  return (
    <>
        <div className="layout-column align-items-center justify-content-start">
            <section className="layout-row align-items-center justify-content-center mt-30">
                <input data-testid="input-guest-name" type="text" ref={guestNameRef} className="large mx-8"
                    placeholder="Guest Name"/>
                <input data-testid="input-checkin-date" type="date" ref={checkinDateRef} className="large mx-8"
                    placeholder="Check in Date"/>
                <input data-testid="input-checkout-date" type="date" ref={checkoutDateRef} className="large mx-8"
                    placeholder="Check out Date"/>
                <button data-testid="add-button" onClick={handleAddGuest}>Add to Menu</button>
            </section>
            <MealSchedule guestList={guestList} />
        </div>
    </>
  )
}

export default GuestForm
