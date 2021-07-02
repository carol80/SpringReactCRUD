import React, { Component } from 'react';
import { Link } from "react-router-dom";

class navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
                <Link to="/" className="navbar-brand ml-5">PhoneBook</Link>
            </nav>
        );
    }
}

export default navbar;