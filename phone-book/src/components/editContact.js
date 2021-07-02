import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link,useHistory,useParams } from "react-router-dom";
import { toast } from 'react-toastify';

const EditContact = () => {
    const {id} = useParams();
    const contacts = useSelector(state=>state);
    const currentContact = contacts.find((contact)=> contact.id === parseInt(id) );
    
    const history = useHistory();
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    useEffect(() => {
        if (currentContact){
            setName(currentContact.name);
            setEmail(currentContact.email);
            setNumber(currentContact.number);
        }
    }, [currentContact]);


    const handleSubmit = (e) => {

        e.preventDefault();

        if (!name || !number || !email){
            return toast.warning("Please fill all the fields!!")
        }

        const checkEmail = contacts.find(contact => contact.id !== parseInt(id) && contact.email === email);
        const checkNumber = contacts.find(contact => contact.id !== parseInt(id) && contact.number === parseInt(number));

        if(checkEmail){
            return toast.error("Email Already Exists!!");
        }

        if(checkNumber){
            return toast.error("Phone Number Already Exists!!");
        }

        const data = {
            id : parseInt(id),
            name,
            email,
            number,
        };

        dispatch({type: "UPDATE_CONTACT", payload:data});
        toast.success("Contact UPDATED successfully!!")
        history.push("/");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="display-3 text-center">
                    EDIT CONTACT {id}
                </div>
                <div className="col-md-6 shadow mx-auto p-5">
                    { currentContact ? (
                        <>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    placeholder="Name" 
                                    className="form-control"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    placeholder="Email" 
                                    className="form-control"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="number" 
                                    placeholder="Phone Number" 
                                    className="form-control" 
                                    value={number}
                                    onChange={e => setNumber(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Update" className="btn btn-block btn-dark" />
                                <Link to="/" className="btn btn-danger m-3">Cancel</Link>
                            </div>
                        </form>
                        </>
                    ): (
                        <>
                        <h3>Sorry, Contact not found!!</h3>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default EditContact;