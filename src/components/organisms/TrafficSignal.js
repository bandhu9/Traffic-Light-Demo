import React, { useEffect, useState } from 'react';
import TrafficLight from '../molecules/TrafficLight';

const TrafficSignal = () => {
  const [activeLight, setActiveLight] = useState('green');
  const [currentLightIndex, setCurrentLightIndex] = useState(0);
  const lightSequence = ['green', 'yellow', 'red', 'yellow'];
  const lightDurations = [5000, 2000, 5000, 2000];

  useEffect(() => {
    setActiveLight(lightSequence[currentLightIndex]);

    const switchLight = () => {
      setCurrentLightIndex((prevIndex) => (prevIndex + 1) % lightSequence.length);
    };

    let intervalId = setInterval(switchLight, lightDurations[currentLightIndex]);
    return () => clearInterval(intervalId);
  }, [currentLightIndex]);

  return <TrafficLight activeLight={activeLight} />;
};

export default TrafficSignal;
