import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS } from "../actions/actionTypes";

const initialState = {
    loading: false,
    user: [],
    error: "",
}

export const loginReducer=(state = initialState, action)=>{
    switch (action.type) {
        case LOGIN_START:
            return{
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                loading: false,
                user: action.payload,
                error: ""
            }
        case LOGIN_FAIL:
            return{
                ...state,
                loading: false,
                user: [],
                error: action.payload,
            }
        default:
            return state;
    }
}