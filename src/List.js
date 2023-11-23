import React from 'react';

const List = ({ cars }) => {
  return (
    <div>
      <h2>Car List</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            {car.carName} - {car.carModel} - Quantity: {car.carQuantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
