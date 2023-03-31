import { USER_LOGOUT } from '../reducers/loginReducer'
import { USER_PROFILE_RESET } from '../reducers/userReducer'

export const logout = () => async (dispatch) => {
    dispatch({ type: USER_LOGOUT })
    dispatch({ type: USER_PROFILE_RESET })
}