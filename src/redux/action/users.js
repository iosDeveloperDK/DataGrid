// import axios from 'axios'
// import { api } from '../../config/config'
import users from '../../data/users.js'
import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  FETCH_USERS
} from '../../config/constants'

export const fetchUsers = (since = 0) => {
  return dispatch => {
    dispatch(fetch())
    setTimeout(() => {
      dispatch(fetchSuccess(users))
    }, 0)
    // axios
    //   .get(`${api}/users?since=${since}`)
    //   .then(users => {
    //     dispatch(fetchSuccess(users))
    //   })
    //   .catch(error => {
    //     dispatch(fetchError(error))
    //   })
  }
}

function fetch() {
  return {
    type: FETCH_USERS
  }
}

function fetchSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

function fetchError(message) {
  return {
    type: FETCH_USERS_ERROR,
    payload: message
  }
}
