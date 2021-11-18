import React, { useEffect, useState } from 'react';
import './App.css';
import Loginn from './Loginn';
import { Provider } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import store from './redux/store';
import { signin } from './redux/action';

import Logout from './Logout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function List({ posts }) {
  return (
    <>
      {
        posts.length > 0
          ? posts.map((post) => {
            return (
              <div key={post.id}>
                <p key={post.email}>{post.email}</p>
                <p key={post.password}>{post.password}</p>
              </div>
            )
          })
          : <div>No Data Yet</div>
      }
    </>)
}


const App = (props) => {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.userList)


  useEffect(() => {
    dispatch(signin());
  }, []);


  return (
    <>
      <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' exact element={<Loginn  posts={userList}/>} />
          <Route path='/logout' exact element={<Logout/>} />
        </Routes>
      </Router>
      </Provider>
    </>
  );
}

export default App;
