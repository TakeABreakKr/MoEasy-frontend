import { useEffect, useReducer, useRef } from 'react';

import { DateInput } from '../../type/date';
import { Button } from '../button';
import { ChevronDown } from '../icon';

import { timeInitializer, timeReducer, TimeState } from './reducer';

import * as styles from './time.css';

type TimeProps = {
  value?: DateInput;
  dispatchTime?: (time: TimeState) => void;
  delay?: number;
};

export function Time({ value, dispatchTime, delay = 100 }: TimeProps) {
  const [state, dispatch] = useReducer(timeReducer, value, timeInitializer);
  const timer = useRef<NodeJS.Timeout>();

  const clearTimeout = () => clearInterval(timer.current);

  useEffect(() => {
    dispatchTime?.(state);
  }, [state, dispatchTime]);

  return (
    <div className={styles.timeInputContainer}>
      <div className={styles.inputGroup}>
        <Button
          variant="ghost"
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
        </Button>
        <input
          type="number"
          value={state.hour}
          onChange={(e) => dispatch({ type: 'SET', payload: { hour: e.target.valueAsNumber, minute: state.minute } })}
          className={styles.input}
          aria-label="Hours"
        />
        <Button
          variant="ghost"
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
        </Button>
      </div>
      <span>:</span>
      <div className={styles.inputGroup}>
        <Button
          variant="ghost"
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
        </Button>
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
        <Button
          variant="ghost"
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
        </Button>
      </div>
    </div>
  );
}
