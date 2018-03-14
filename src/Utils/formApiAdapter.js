import { SubmissionError } from 'redux-form'

export function formApiAdapter(dispatch, actionCreator) {
  return (...args) =>
    new Promise((resolve, reject) => {
        dispatch(actionCreator(...args)).then((response) => {
        if (response.error) {
          reject(formatErrors(response))
        } else {
          resolve(response)
        }
      })
    })
}

function formatErrors(errors){
    console.log(errors);
    throw new SubmissionError({
        password: 'Wrong password',
        _error: 'Login failed!'
    });
}
