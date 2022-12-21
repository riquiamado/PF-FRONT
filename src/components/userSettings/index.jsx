import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  store  from '../../redux/store/index.jsx'
import { useAuth0 } from '@auth0/auth0-react';
import { getUserById } from '../../redux/actions/actions';
import { updateUser } from '../../redux/actions/actions';
import './userSettings.css';

const UserSettings = () => {
    const userSessionLocal = useSelector((state) => state.userSession);
    // const localUser = useSelector((state) => state.users)
    //const { user } = useAuth0();
    //console.log(user)
    // console.log(getUserById(user.name))
    

    const dispatch = useDispatch();
    const [input, setInput] = useState({
        name: "",
        email: ""
        // password: ""
    });

    const handleChange = event => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const handleUpdate = event => {
        dispatch(updateUser(id, input));
        setInput({
            name: "",
            email: ""
            // password: ""
        })
    };

    return(
        <div className='userSettings'>
            <h1>Settings</h1>
            <div>
                <h3>Update User Name</h3>
                <form onSubmit={e => handleUpdate(e)}>
                    <h3>New user name: </h3>
                    <input
                    type="text"
                    value={ input.name }
                    name="name"
                    onChange={e => handleChange(e)}
                    />
                </form>
            </div>
            
            {/* <div>
                <label htmlFor="">New User Name:</label>
                <input
                type="text"
                value={ input.name }
                name="name"
                onChange={e => handleChange(e)}
                />
            </div> */}
            <h3>Update Email</h3>
            <div>
                <label htmlFor="">New Email:</label>
                <input
                type="text"
                value={ input.email }
                name="email"
                onChange={e => handleChange(e)}
                />
            </div>
            {/* <h3>Update Password</h3>
            <div>
                <label htmlFor="">New Password:</label>
                <input
                type="text"
                value={ input.password }
                name="password"
                onChange={e => handleChange(e)}
                />
            </div> */}
        </div>
    )
}

export default UserSettings;