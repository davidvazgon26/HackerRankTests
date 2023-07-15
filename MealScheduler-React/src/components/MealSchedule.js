import React, { useState } from 'react';
import GuestForm from './GuestForm';

const MealSchedule = () => {
  const [guestList, setGuestList] = useState([]);

  const addGuest = (guestData) => {
    const { guestName, checkInDate, checkOutDate } = guestData;

    const dates = getDates(checkInDate, checkOutDate);
    const newGuestList = dates.map((date) => ({
      guestName,
      date
    }));

    setGuestList((prevGuestList) => [...prevGuestList, ...newGuestList]);
  };

  const getDates = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const dates = [];

    while (start <= end) {
      dates.push(new Date(start));
      start.setDate(start.getDate() + 1);
    }

    return dates.map((date) => date.toISOString().split('T')[0]);
  };

  const sortGuestList = () => {
    const sortedGuestList = [...guestList].sort((a, b) => new Date(a.date) - new Date(b.date));
    setGuestList(sortedGuestList);
  };

  return (
    <div>
      <GuestForm onAddGuest={addGuest} />
      <button onClick={sortGuestList}>Sort Guest List</button>
      <ul data-testid="guest-list">
        {guestList.map((guest, index) => (
          <li key={index}>
            <div>{guest.date}</div>
            <div>{guest.guestName}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealSchedule;
