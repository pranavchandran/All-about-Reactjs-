import React, { useState, Fragment, useRef } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import UsersList from './UsersList';
import { v4 as uuidv4 } from 'uuid';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = props => {

    const nameInput = useRef();
    const ageInput = useRef();

    // const [user, setUser] = useState({
    //     name: '',
    //     age: '',
    //     id: uuidv4()
    // });

    const [error, setError] = useState();

    const addUserHandler = (e) => {
        const enteredName = nameInput.current.value;
        const enteredAge = ageInput.current.value;
        e.preventDefault();
        if (enteredName === '' || enteredAge === '' || isNaN(enteredAge) || enteredAge < 1) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age'
            })
            return;
        }
        let user = {
            name: enteredName,
            age: enteredAge,
            id: uuidv4()
        }
        props.onAddUser(user);
        nameInput.current.value = '';
        ageInput.current.value = '';
        // setUser({
        //     id: '',
        //     name: '',
        //     age: ''
        // });
    }

    // const inputChangedHandler = (e) => {
    //     const { name, value } = e.target;
    //     setUser({ ...user, [name]: value });
    // }

    const onClear = () => {
        setError(null);
    }

    return (
        <Fragment>
        {error && <ErrorModal title={error.title} message={error.message} onClear={onClear} />}
        <Card className={classes.input}>
            <form
            onSubmit={addUserHandler}
            >
                <label
                htmlFor="username"
                >Username</label>
                <input id="username" type="text" name="name" 
                ref={nameInput}
                />
                <label
                htmlFor="age"
                >Age (Years)</label>
                <input id="age" type="age" name="age" 
                ref={ageInput}
                />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </Fragment>
    )
}


export default AddUser;