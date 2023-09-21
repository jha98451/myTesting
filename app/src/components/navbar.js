import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Product from './showProduct';
import AddProduct from './addproduct';
import UpdateProduct from './updateproduct';

class Navbar extends Component{
    render(){
        return(
            <Router>
            <div className="App">
                <ul className="App-header">
                <li>
                    <Link to="/">Product</Link>
                </li>
                <li>
                    <Link to="/addProduct">Add Product</Link>
                </li>
                <li>
                    <Link to="/UpdateProduct">Update Product</Link>
                </li>
                </ul>
            <Routes>
                    <Route exact path='/' element={< Product />}></Route>
                    <Route exact path='/addProduct' element={< AddProduct />}></Route>
                    <Route exact path='/:id/update' element={< UpdateProduct />}></Route>
            </Routes>
            
            </div>
        </Router>
        );
    }
    
}

export default Navbar;