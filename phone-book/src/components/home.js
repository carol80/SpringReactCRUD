import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Home = () => {

    const contacts = useSelector((state)=> state);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 my-5 text-left">
                    <Link to="/add" className="btn btn-outline-dark">
                        ADD CONTACT
                    </Link>
                </div>
                <div className="col-md-10 mx-auto">
                    <table className="table table-hover">
                        <thead className="text-white bg-dark text-center">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">NAME</th>
                                <th scope="col">NUMBER</th>
                                <th scope="col">EMAIL</th>
                                <th scope="col">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact, id)=> (
                                <tr key={id}>
                                    <td>{id + 1}</td>
                                    <td>{contact.name}</td>
                                    <td>{contact.number}</td>
                                    <td>{contact.email}</td>
                                    <td className="text-center">
                                        <Link to={`/edit/${id}`} className="btn btn-small btn-primary">EDIT</Link>
                                        <button className="btn btn-small btn-danger">DELETE</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Home;