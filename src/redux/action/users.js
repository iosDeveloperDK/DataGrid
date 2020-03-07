// import axios from 'axios'
// import { api } from '../../config/config'
import users from '../../data/users.js'
import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS,
  DELETE_USERS
} from '../../config/constants'

export const fetchUsers = (since = 0) => {
  return dispatch => {
    dispatch(fetch())
    setTimeout(() => {
      dispatch(fetchSuccess(users))
    }, 0)
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

export const deleteUsers = users => {
  return {
    type: DELETE_USERS,
    payload: users
  }
}
