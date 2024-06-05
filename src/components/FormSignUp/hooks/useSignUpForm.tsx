import React, {useState} from 'react';

const UseSignUpForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailInp, setEmailInp] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    return {firstName, lastName, emailInp, address, password, setFirstName, setLastName, setEmailInp, setAddress, setPassword}
};

export default UseSignUpForm;