import {ADD_USER, UPDATE_USER,DELETE_USER} from './UserActionType';

export const addUser = (userData) => {
    return {
        type: ADD_USER,
        payload: userData
    }
}
export const updateUser = (userData) => {
    return {
        type: UPDATE_USER,
        payload: userData
    }
}
export const deleteUser = (userData) => {
    return {
        type: DELETE_USER,
        payload: userData
    }
}