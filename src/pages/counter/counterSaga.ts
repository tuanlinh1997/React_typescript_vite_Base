import { delay, put, takeEvery, all } from '@redux-saga/core/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { incrementIfOdd, incrementSaga, incrementSagaSuccess } from './counterSlice'

// export function* log(action: PayloadAction) {
//   console.log('Log', action);
// }

function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('Waiting 1s')
  // Wait 1s
  yield delay(1000)
  // const response = await fetchCount(amount)
  console.log('Waiting done, dispatch action', action)
  // Dispatch action success
  yield put(incrementSagaSuccess(action.payload))
}

function* handleIncrementIfOddSaga(action: PayloadAction<number>) {
  console.log('Waiting 1s')
  // Wait 1s
  yield delay(1000)
  console.log(action)
  // Dispatch action success
  yield put(incrementSagaSuccess(action.payload))
}

export default function* counterSaga() {
  yield all([
    takeEvery(incrementSaga.type, handleIncrementSaga),
    takeEvery(incrementIfOdd.type, handleIncrementIfOddSaga)
  ])
}
