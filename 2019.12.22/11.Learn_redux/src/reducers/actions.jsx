import { ADD_NUMBER, JIAN_NUMBER } from './action-type'

export const Add_Number = (number) => ({ type: ADD_NUMBER, data: number })
export const Jian_Number = (number) => ({ type: JIAN_NUMBER, data: number })
export const Add_number_Async = (number) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(Add_Number(number))
    }, 5000);
  }
}