import React, { useState } from 'react';

const Form = ({ addCar }) => {
  const [carName, setCarName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carQuantity, setCarQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addCar({ carName, carModel, carQuantity: parseInt(carQuantity) });
    setCarName('');
    setCarModel('');
    setCarQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={carName} onChange={(e) => setCarName(e.target.value)} />
      </label>
      <br />
      <label>
        Model:
        <input type="text" value={carModel} onChange={(e) => setCarModel(e.target.value)} />
      </label>
      <br />
      <label>
        Quantity:
        <input type="number" value={carQuantity} onChange={(e) => setCarQuantity(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add Car</button>
    </form>
  );
};

export default Form;
