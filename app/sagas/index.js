export function* helloSaga() {
  console.log('Hello Sagas!')
}

export function* sagas() {
  yield helloSaga;
}