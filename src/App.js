
import React, { useState } from 'react';
import Form from './Form';
import List from './List';

const App = () => {
  const [cars, setCars] = useState([]);

  const addCar = (newCar) => {
    const existingCarIndex = cars.findIndex(
      (car) => car.carName === newCar.carName && car.carModel === newCar.carModel
    );

    if (existingCarIndex !== -1) {
      const updatedCars = [...cars];
      updatedCars[existingCarIndex].carQuantity += newCar.carQuantity;
      setCars(updatedCars);
    } else {
      setCars([...cars, newCar]);
    }
  };

  return (
    <div>
      <h1>Car Management System</h1>
      <Form addCar={addCar} />
      <List cars={cars} />
    </div>
  );
};

export default App;
