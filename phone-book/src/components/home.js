import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Home = () => {

    const contacts = useSelector((state)=> state);
    const dispatch = useDispatch();

    const deleteContact = (id) => {
        dispatch({type: "DELETE_CONTACT", payload: id})
        toast.success("Contact Deleted");
    }

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
                                        <button className="btn btn-small btn-danger" onClick={() => deleteContact(contact.id)}>DELETE</button>
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