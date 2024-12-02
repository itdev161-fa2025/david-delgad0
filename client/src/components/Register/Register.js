import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
});

const { name, email, password, passwordConfirm } = userData;

const onChange = (e) => {
    const { name, value } = e.target;
    setUserData({
    ...userData,
    [name]: value
    });
};

const register = async () => {
    if (password !== passwordConfirm) {
    console.log('Passwords do not match');
    return;
    }

    const newUser = {
name: name,
email: email,
password: password
    }

    try {
    const config = {
        headers: {
    'Content-Type': 'application/json'
        }
    };

const body = JSON.stringify(newUser);

const res = await axios.post('http://localhost:5008/api/users', body, config);
console.log(res.data);
    } catch (error) {
console.error(error.response?.data || error.message);
    }
};

return (
    <form onSubmit={(e) => e.preventDefault()}>
    <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={onChange}
    />
    <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={onChange}
    />
    <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={onChange}
    />
    <input
        type="password"
        name="passwordConfirm"
        placeholder="Confirm Password"
        value={passwordConfirm}
        onChange={onChange}
    />
    <button type="button" onClick={register}>
        Register
</button>
    </form>
);
};

export default Register;
