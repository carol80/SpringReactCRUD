import React, { Component } from 'react';
import { Link } from "react-router-dom";

class home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 my-5 text-left">
                        <Link to="/add" className="btn btn-outline-dark">
                            ADD CONTACT
                        </Link>
                    </div>
                    <div className="col-md-6 mx-auto">
                        <h1>Welcome to Phone-book!!</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default home;