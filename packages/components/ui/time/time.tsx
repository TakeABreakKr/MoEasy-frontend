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
  disabled?: boolean;
};

export function Time({ value, dispatchTime, delay = 100, min, max, disabled }: TimeProps) {
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
  const setTimer = (cb: () => void) => {
    if (!disabled)
      return () => {
        timer.current = setInterval(cb, delay);
      };
  };

  useEffect(() => {
    dispatchTime?.(state);
  }, [state, dispatchTime]);

  return (
    <div className={styles.timeInputContainer}>
      <div className={styles.inputGroup}>
        <Button
          variant="ghost"
          size="small"
          rounded="small"
          onClick={addHour}
          onPointerDown={setTimer(addHour)}
          onPointerUp={clearTimeout}
          onPointerLeave={clearTimeout}
          className={styles.button}
          aria-label="Increase hours"
          disabled={disabled}
        >
          <ChevronDown width={24} transform="rotate(180)" />
        </Button>
        <input
          type="number"
          value={state.hour.toString().padStart(2, '0')}
          onChange={(e) => setTime({ hour: e.target.valueAsNumber })}
          className={styles.input}
          aria-label="Hours"
          disabled={disabled}
        />
        <Button
          variant="ghost"
          size="small"
          rounded="small"
          onClick={minusHour}
          onPointerDown={setTimer(minusHour)}
          onPointerUp={clearTimeout}
          onPointerLeave={clearTimeout}
          className={styles.button}
          aria-label="Decrease hours"
          disabled={disabled}
        >
          <ChevronDown width={24} />
        </Button>
      </div>
      <span>:</span>
      <div className={styles.inputGroup}>
        <Button
          variant="ghost"
          size="small"
          rounded="small"
          onClick={addMinute}
          onPointerDown={setTimer(addMinute)}
          className={styles.button}
          onPointerUp={clearTimeout}
          onPointerLeave={clearTimeout}
          aria-label="Increase minutes"
          disabled={disabled}
        >
          <ChevronDown width={24} transform="rotate(180)" />
        </Button>
        <input
          type="number"
          value={state.minute.toString().padStart(2, '0')}
          onChange={(e) => setTime({ minute: e.target.valueAsNumber })}
          className={styles.input}
          aria-label="Minutes"
          disabled={disabled}
        />
        <Button
          variant="ghost"
          size="small"
          rounded="small"
          onClick={minusMinute}
          onPointerDown={setTimer(minusMinute)}
          className={styles.button}
          onPointerUp={clearTimeout}
          onPointerLeave={clearTimeout}
          aria-label="Decrease minutes"
          disabled={disabled}
        >
          <ChevronDown width={24} />
        </Button>
      </div>
    </div>
  );
}
