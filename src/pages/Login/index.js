import React from 'react';

import './styles.scss';

function Login() {
    return (
        <>

            <div className="Lcontainer">
                <div className="login">
                    <h1 className="title">Login</h1>
                    <form method="POST">

                        <input type="text" className="txtInput" placeholder="Usuario" name="user" />
                        <input type="text" className="txtInput" placeholder="Contraseña" name="password" />
                        <input type="submit" className="submit" value="ingresar" />

                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
