import React from 'react';
import Reactdom from 'react-dom';

import Card from './Card'
import Button from './Button'
import classes from './ErrorModal.module.css'


const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClear} />
    )
}


const ModalOverlay = (props) => {
    return (
        <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onClear}>Okay</Button>
        </footer>
    </Card>
    )
}


const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {Reactdom.createPortal(
                <Backdrop onClear={props.onClear} />,
                document.getElementById('backdrop-root')
            )}
            {Reactdom.createPortal(
                <ModalOverlay title={props.title} message={props.message} onClear={props.onClear} />,
                document.getElementById('overlay-root')
            )}

        </React.Fragment>
    );
}


export default ErrorModal;