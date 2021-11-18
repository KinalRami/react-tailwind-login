import React from 'react';
// import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';

const Logout = ({ userReducer }) => {
    console.log("userReducer",userReducer);
//     const history = useHistory();
  
//   const handleRoute = () =>{ 
//     history.push("/login");
//   }
    return (
        <div>
            {Object.values(userReducer?.userList).map((user, i) => {
                console.log("useruseruser",user," i ",i )
                
               return(
                <h1  key={i}><b>welcome : {user?.name}</b> </h1>
               )
            }
            )}
            <button 
            // onClick={handleRoute}
            className={`bg-blue py-2 px-4 text-sm text-white rounded border border-blue focus:outline-none focus:border-blue-dark`}>
                LogOut
            </button>
        </div>
    )
}

function mapStateToProps(state) {
    const { userReducer } = state;
    return { userReducer }

}
export default connect(mapStateToProps)(Logout);
