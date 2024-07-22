import React from 'react';
import Light from '../atoms/Light';
import './TrafficLight.css';

const TrafficLight = ({ activeLight }) => {
  return (
    <div className="traffic-light">
      <Light color="red" isOn={activeLight === 'red'} />
      <Light color="yellow" isOn={activeLight === 'yellow'} />
      <Light color="green" isOn={activeLight === 'green'} />
    </div>
  );
};

export default TrafficLight;
