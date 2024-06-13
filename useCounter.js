import { useState } from 'react';

const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => setCounter((current) => current + value);

  const reset = () => setCounter(initialValue);

  const decrement = (value = 1) => {
    if (counter === 0) return;
    setCounter((current) => current - value);
  };

  return { counter, increment, reset, decrement };
};

export default useCounter;
