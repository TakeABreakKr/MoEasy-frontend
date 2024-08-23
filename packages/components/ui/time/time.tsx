import { useEffect, useReducer, useRef } from 'react';

import { DateInput } from '../../type/date';
import { Button } from '../button';
import { ChevronDown } from '../icon';

import { timeInitializer, timeReducer, TimeState } from './reducer';

import * as styles from './time.css';

type TimeProps = {
  value?: DateInput | TimeState;
  dispatchTime?: (time: TimeState) => void;
  delay?: number;
  min?: TimeState;
  max?: TimeState;
};

export function Time({ value, dispatchTime, delay = 100, min, max }: TimeProps) {
  const [state, dispatch] = useReducer(timeReducer, { value, min, max }, timeInitializer);
  const timer = useRef<NodeJS.Timeout>();
  const clearTimeout = () => clearInterval(timer.current);
  const addHour = () => dispatch({ type: 'ADD_HOUR', min, max });
  const minusHour = () => dispatch({ type: 'MINUS_HOUR', min, max });
  const addMinute = () => dispatch({ type: 'ADD_MINUTE', min, max });
  const minusMinute = () => dispatch({ type: 'MINUS_MINUTE', min, max });
  const setTime = ({ hour = state.hour, minute = state.minute }) => {
    dispatch({
      type: 'SET',
      payload: { hour, minute },
      min,
      max,
    });
  };

  useEffect(() => {
    dispatchTime?.(state);
  }, [state, dispatchTime]);

  return (
    <div className={styles.timeInputContainer}>
      <div className={styles.inputGroup}>
        <Button
          variant="ghost"
          onClick={addHour}
          onPointerDown={() => {
            timer.current = setInterval(addHour, delay);
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
          onChange={(e) => setTime({ hour: e.target.valueAsNumber })}
          className={styles.input}
          aria-label="Hours"
        />
        <Button
          variant="ghost"
          onClick={minusHour}
          onPointerDown={() => {
            timer.current = setInterval(minusHour, delay);
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
          onClick={addMinute}
          onPointerDown={() => {
            timer.current = setInterval(addMinute, delay);
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
          onChange={(e) => setTime({ minute: e.target.valueAsNumber })}
          className={styles.input}
          aria-label="Minutes"
        />
        <Button
          variant="ghost"
          onClick={minusMinute}
          onPointerDown={() => {
            timer.current = setInterval(minusMinute, delay);
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
