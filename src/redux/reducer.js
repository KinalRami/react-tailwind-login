import { IS_LOADING, LOGIN_SUCCESS,USER_LIST, IS_LOGOUT } from "./types";

const initialState = {
    isLoading: false,
    isLogin: false,
    islogout: false,
    userList: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }

        case LOGIN_SUCCESS: {
            return {
                ...state,
                userList: action.payload
            }
        }

        case USER_LIST:
        {
            console.log("ULIST ", action.payload)
            return {
                    ...state,
                    userList: action.payload
            }
        }

        case IS_LOGOUT: {
            return {
                ...state,
                userList: null
            }
        }

        default:
            return initialState;
    }
}

export default userReducer;