import { IS_LOADING, LOGIN_SUCCESS } from "./types";

const initialState = {
    isLoading:false,
    isLogin: false,
    userData:{}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }

        case LOGIN_SUCCESS:{
            return {
                ...state,
                userData: action.payload
            }
        }


        default:
            return initialState;
    }
}

export default userReducer;