import React from 'react'

function MealSchedule() {
  const guestList = [];
  
  return (
    <div className="card w-40 pt-30 pb-8 mt-20">
        <table>
            <thead>
            <tr>
                <th>Date</th>
                <th>Customer Name for Meals</th>
            </tr>
            </thead>
            <tbody data-testid="guest-list">
            {guestList.map((guest) => (
            <tr key={guest.date}>
              <td>{guest.date}</td>
              <td>
                <p>{guest.name}</p>
              </td>
            </tr>
          ))}
            </tbody>
        </table>
    </div>
  )
}

export default MealSchedule
