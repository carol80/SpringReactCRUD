import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddContact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const contacts = useSelector((state)=> state);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!name || !number || !email){
            return toast.warning("Please fill all the fields!!")
        }

        const checkEmail = contacts.find(contacts => contacts.email === email && email);
        const checkNumber = contacts.find(contacts => contacts.number === parseInt(number) && number);

        if(checkEmail){
            return toast.error("Email Already Exists!!");
        }

        if(checkNumber){
            return toast.error("Phone Number Already Exists!!");
        }

        const data = {
            id : contacts[contacts.length-1].id +1,
            name,
            email,
            number,
        };

        dispatch({type: "ADD_CONTACT", payload:data});
        toast.success("Contact added successfully!!")
        history.push("/");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="display-3 text-center">
                    ADD CONTACT
                </div>
                <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input 
                                type="text" 
                                placeholder="Name" 
                                className="form-control" 
                                value={name}
                                onChange={ e => setName(e.target.value)}
                                />
                        </div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                placeholder="Email" 
                                className="form-control" 
                                value={email}
                                onChange={ e => setEmail(e.target.value)}
                                />
                        </div>
                        <div className="form-group">
                            <input 
                                type="number" 
                                placeholder="Phone Number" 
                                className="form-control" 
                                value={number}
                                onChange={ e => setNumber(e.target.value)}
                                />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Add Contact" className="btn btn-block btn-dark" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddContact;