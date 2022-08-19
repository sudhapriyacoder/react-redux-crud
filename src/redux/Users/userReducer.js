import {ADD_USER} from './UserActionType';
import {UPDATE_USER} from './UserActionType';
import {DELETE_USER} from './UserActionType';


const initialState = {
    AllUsers: [{name:'sudha',surname:'priya'}]
}

export const UsersReducer = (state = initialState,action) => {
    switch(action.type) {
     case ADD_USER:  {
        state.AllUsers.push(action.payload);
        return state;
     }
     case UPDATE_USER:  {
        state.AllUsers = [];
        state.AllUsers = action.payload
        return state;
     }
     case DELETE_USER:  {
        state.AllUsers = [];
        state.AllUsers = action.payload
        return state;
     }
     default: return state
    }
}
