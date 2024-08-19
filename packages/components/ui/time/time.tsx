import { useReducer, useRef } from 'react';

import { ChevronDown } from '../icon';

import { timeInitializer, timeReducer } from './reducer';

import * as styles from './time.css';

type TimeProps = {
  delay?: number;
};

export function Time({ delay = 100 }: TimeProps) {
  const [state, dispatch] = useReducer(timeReducer, null, timeInitializer);
  const timer = useRef<NodeJS.Timeout>();

  const clearTimeout = () => clearInterval(timer.current);

  return (
    <div className={styles.timeInputContainer}>
      <div className={styles.inputGroup}>
        <button
          onClick={() => dispatch({ type: 'ADD_HOUR' })}
          onPointerDown={() => {
            timer.current = setInterval(() => dispatch({ type: 'ADD_HOUR' }), delay);
          }}
          onPointerUp={clearTimeout}
          onPointerLeave={clearTimeout}
          className={styles.button}
          aria-label="Increase hours"
        >
          <ChevronDown width={24} transform="rotate(180)" />
        </button>
        <input
          type="number"
          value={state.hour}
          onChange={(e) => dispatch({ type: 'SET', payload: { hour: e.target.valueAsNumber, minute: state.minute } })}
          className={styles.input}
          aria-label="Hours"
        />
        <button
          onClick={() => dispatch({ type: 'MINUS_HOUR' })}
          onPointerDown={() => {
            timer.current = setInterval(() => dispatch({ type: 'MINUS_HOUR' }), delay);
          }}
          onPointerUp={clearTimeout}
          onPointerLeave={clearTimeout}
          className={styles.button}
          aria-label="Decrease hours"
        >
          <ChevronDown width={24} />
        </button>
      </div>
      <span>:</span>
      <div className={styles.inputGroup}>
        <button
          onClick={() => dispatch({ type: 'ADD_MINUTE' })}
          onPointerDown={() => {
            timer.current = setInterval(() => dispatch({ type: 'ADD_MINUTE' }), delay);
          }}
          className={styles.button}
          onPointerUp={clearTimeout}
          onPointerLeave={clearTimeout}
          aria-label="Increase minutes"
        >
          <ChevronDown width={24} transform="rotate(180)" />
        </button>
        <input
          type="number"
          value={state.minute}
          onChange={(e) =>
            dispatch({
              type: 'SET',
              payload: {
                hour: state.hour,
                minute: e.target.valueAsNumber,
              },
            })
          }
          className={styles.input}
          aria-label="Minutes"
        />
        <button
          onClick={() => dispatch({ type: 'MINUS_MINUTE' })}
          onPointerDown={() => {
            timer.current = setInterval(() => dispatch({ type: 'MINUS_MINUTE' }), delay);
          }}
          className={styles.button}
          onPointerUp={clearTimeout}
          onPointerLeave={clearTimeout}
          aria-label="Decrease minutes"
        >
          <ChevronDown width={24} />
        </button>
      </div>
    </div>
  );
}
