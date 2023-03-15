import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '~/store/store'

export interface CounterState {
  value: number
  status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterState = {
  value: 0,
  status: 'idle'
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },

    incrementSaga: (state, action: PayloadAction<number>) => {
      state.status = 'loading'
    },
    incrementSagaSuccess: (state, action: PayloadAction<number>) => {
      state.status = 'idle'
      state.value += action.payload
    },
    incrementIfOdd: (state, action: PayloadAction<number>) => {
      state.status = 'loading'
    }
  }
})

// ACTION
export const { increment, decrement, incrementByAmount, incrementSaga, incrementSagaSuccess, incrementIfOdd } =
  counterSlice.actions

// SELECTORS
export const selectCount = (state: RootState) => state.counter.value

// reducer
const counterReducer = counterSlice.reducer
export default counterReducer
