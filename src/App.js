import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Welcome from './Welcome';
import Profile from './Profile';


function App() {
  const { isAuthenticated } = useAuth0();
  
  return (

    <>
      <div>

        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={isAuthenticated ? <BestBooks/>: <Welcome />}
            >
            </Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
            <Route exact path="/about"
              element={<About />}>

            </Route>
            <Route exact path="/profile"
              element={<Profile />}>

            </Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  )

}

export default App;
