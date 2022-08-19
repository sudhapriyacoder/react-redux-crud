import { combineReducers } from "redux";
import { UsersReducer } from "./Users/userReducer";

export const RootReducer = combineReducers({
    user: UsersReducer
})
