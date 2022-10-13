import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import ShoppingCart from './components/pages/ShoppingCart';
import CustomThemeProvider from './CustomThemeProvider';
import store from './redux-state/store';
import UserRegistrationPage from './components/pages/UserRegistrationPage';

function App() {
  return (
    <Provider store={store}>
      <CustomThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/sign-in" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/register-user" element={<UserRegistrationPage />} />
          </Routes>
        </BrowserRouter>
      </CustomThemeProvider>
    </Provider>
  );
}

export default App;
