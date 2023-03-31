import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import SignIn from './pages/SignIn';
import UserProfil from './pages/UserProfil';
import { Provider } from 'react-redux';
import store from './redux/store'
import Layout from './components/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/profile" element={<UserProfil />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

