import React from 'react';
import blank from '../../assets/images/blankUser.png';

import './styles.scss';

function Graduates() {
    return (
        <>

            <div className="Gcontainer">

                <h1 className="title">Egresados</h1>

                <div className="graduates">
                    <div className="graduado">
                        <img className="fotoEgresado" src={blank} alt="egresado" />
                        <p className="infoEgresado">Nombre completo</p>
                        <p className="infoEgresado">Especialidad</p>
                        <p className="infoEgresado">Año de egreso</p>

                    </div>
                </div>

            </div>
        </>
    );
}

export default Graduates;
