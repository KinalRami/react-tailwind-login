import { IS_LOGIN, LOGIN_SUCCESS, USER_LIST } from "./types";
import axios from "axios";

export const signin = (params) => {
    return ((dispatch) => {
        console.log("Params :: ", params);
        dispatch({ type: LOGIN_SUCCESS, payload: params }) 
        axios.get('https://reqres.in/api/login')   
        .then(({data}) => {
            const { token } = data;
                localStorage.setItem('token', token);
                localStorage.getItem('token');
            dispatch({ type: USER_LIST, payload: data?.data.slice(0, 5)})
          })
          .catch(e => {
            console.log("Get User Error :: ", e);
          });
    })
}