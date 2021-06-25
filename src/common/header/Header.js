import React, { useState } from 'react';
import './Header.css';
import { Button } from '@material-ui/core';

function Header() {
    const [user, setUser] = useState(false)


    return (
        <div className="headerCSS">
            <img id='logo' src="https://cdn.upgrad.com/uploads/production/286e1f11-1897-4d0c-ab0f-6b2bfc1ce642/logo.svg"></img>

            {user ? <Button id='login' variant="contained" onClick={() => {

                setUser(false)
            }} style={{ float: "right", position: "absolute", right: 10, top: 7 }} >
                Logout
            </Button> :
                <Button id='login' variant="contained" onClick={() => {
                    setUser(true)
                }} style={{ float: "right", position: "absolute", right: 10, top: 7 }} >
                    LOGIN
                </Button>}


        </div>
    )

}


export default Header;