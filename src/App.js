import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Users from './pages/Users';
import Modify from './pages/Modify';
import CreatePost from './pages/CreatePost';
import Navbar from './components/Navbar';
import store from './redux/store.js';
import { Provider } from 'react-redux';

const App = () => {
  store.subscribe(() => console.log(store.getState()));

  return (
    <div className="App container text-center">
      <Provider store={store}>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/users/:userSlug" element={<Users />} />
            <Route path="/users/modify" element={<Modify />} />
            <Route path="/posts" element={<CreatePost />} />
          </Routes>
      </Provider>
    </div>
)};

export default App;

