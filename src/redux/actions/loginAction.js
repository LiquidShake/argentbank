import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
} from '../reducers/loginReducer'
import { userProfile } from './userProfilAction'
import axios from 'axios'

export const login = (email, password) => async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      }
  
      const { data } = await axios.post(
        'http://localhost:3001/api/v1/user/login',
        { email, password },
        config
      )
  
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
      dispatch(userProfile(data.body.token))
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
}