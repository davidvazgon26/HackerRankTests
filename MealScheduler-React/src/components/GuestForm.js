import React, { useState } from 'react';
import MealSchedule from './MealSchedule';

function GuestForm() {
  const [guestName, setGuestName] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guestList, setGuestList] = useState([]);

  const handleAddButton = () => {
    if (!guestName || !checkInDate || !checkOutDate) {
      alert('Please enter all the fields');
      return;
    }

    const newGuest = {
      name: guestName,
      checkIn: checkInDate,
      checkOut: checkOutDate,
    };

    setGuestList([...guestList, newGuest]);
    setGuestName('');
    setCheckInDate('');
    setCheckOutDate('');
  };

  return (
    <>
      <div className="layout-column align-items-center justify-content-start">
        <section className="layout-row align-items-center justify-content-center mt-30">
          <input
            data-testid="input-guest-name"
            value={guestName}
            className="large mx-8"
            placeholder="Guest Name"
            type="text"
            onChange={(e) => setGuestName(e.target.value)}
          />
          <input
            data-testid="input-checkin-date"
            value={checkInDate}
            className="large mx-8"
            placeholder="Check in Date"
            type="date"
            onChange={(e) => setCheckInDate(e.target.value)}
          />
          <input
            data-testid="input-checkout-date"
            value={checkOutDate}
            className="large mx-8"
            placeholder="Check out Date"
            type="date"
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
          <button data-testid="add-button" onClick={handleAddButton}>
            Add to Menu
          </button>
        </section>
        {guestList.length === 0 ? (
          <div data-testid="guest-list"></div>
        ) : (
          <MealSchedule guestList={guestList} />
        )}
      </div>
    </>
  );
}

export default GuestForm;
