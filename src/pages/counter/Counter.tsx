import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '~/hooks/hooks'

import { decrement, increment, incrementByAmount, incrementSaga, incrementIfOdd, selectCount } from './counterSlice'
import styles from './Counter.module.css'

export default function Counter() {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  const incrementValue = Number(incrementAmount) || 0

  const handleIncrementIfOdd = () => {
    console.log(count % 2)
    if (count % 2 === 1) {
      console.log(count)

      dispatch(incrementIfOdd(incrementValue))
    }
  }
  return (
    <div>
      <div className={styles.row}>
        <button className={styles.button} aria-label='Decrement value' onClick={() => dispatch(decrement())}>
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button className={styles.button} aria-label='Increment value' onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label='Set increment amount'
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button className={styles.button} onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </button>
        <button className={styles.asyncButton} onClick={() => dispatch(incrementSaga(incrementValue))}>
          Add Async Saga
        </button>
        <button className={styles.button} onClick={handleIncrementIfOdd}>
          Add If Odd
        </button>
      </div>
    </div>
  )
}
