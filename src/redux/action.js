import { IS_LOGIN, LOGIN_SUCCESS } from "./types";

export const signin = (params) => {
    return ((dispatch) => {
        console.log("Params :: ", params);
        dispatch({ type: LOGIN_SUCCESS, payload: params })
    })
}