import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
import BookFormModal from './BookFormModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App(){
 
    return (
      <>
      <div>

        <Router>
          <Header />
          <Routes>
            <Route 
              path="/"
              element={<BestBooks/>}
            >
            </Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
            <Route  exact path="/about"
              element={<About/>}>

            </Route>
          </Routes>
          <Footer />
        </Router>
      </div>
      </>
    )
  
}

export default App;
