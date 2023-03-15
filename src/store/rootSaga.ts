import { all } from 'redux-saga/effects'
import counterSaga from '~/pages/counter/counterSaga'
export default function* rootSaga() {
  yield all([counterSaga()])
}
