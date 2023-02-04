import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import Register from './components/register';
import Login from './components/login';
import Logout from './components/logout';
import Single from './components/single';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render (
    <Router>
        <React.StrictMode>
            <Header />
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/logout" element={<Logout />} />
                <Route exact path="/post/:slug" element={<Single />} />
            </Routes>
            <Footer />
        </React.StrictMode>
    </Router>
);

reportWebVitals();