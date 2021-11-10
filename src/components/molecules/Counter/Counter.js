import React, {useState} from 'react';
import Button from '../../atoms/Button/Button';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="c-counter-body">
      <h1>This is counter</h1>
      <div id="counter-value">{counter}</div>
      <div>
        <Button id="increment-btn" text={'Increment' } onClick={() => setCounter(counter + 1)}>
        Increment
        </Button>
        <Button id="decrement-btn" text={'Decrement' } onClick={() => setCounter(counter - 1)}>
        Decrement
        </Button>
      </div>
    </div>
  );
}
