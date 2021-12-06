import React from 'react';

import './styles.scss';

function Graduates() {
    return (
        <>

            <div className="Gcontainer">
                <div className="graduates">
                    <h1 className="title">Egresados</h1>
                    <div className="graduado informatica">
                        <div className="Gfiller">
                            <p className="fillerContent">fill</p>
                        </div>
                        <div className="graduadoContent">
                            <p className="infoEgresado">Nombre completo</p>
                            <p className="infoEgresado">Especialidad</p>
                            <p className="infoEgresado">Año de egreso</p>
                        </div>
                    </div>

                    <div className="graduado construcciones">
                        <div className="Gfiller">
                            <p className="fillerContent">fill</p>
                        </div>
                        <div className="graduadoContent">
                            <p className="infoEgresado">Nombre completo</p>
                            <p className="infoEgresado">Especialidad</p>
                            <p className="infoEgresado">Año de egreso</p>
                        </div>
                    </div>

                    <div className="graduado electronica">
                        <div className="Gfiller">
                            <p className="fillerContent">fill</p>
                        </div>
                        <div className="graduadoContent">
                            <p className="infoEgresado">Nombre completo</p>
                            <p className="infoEgresado">Especialidad</p>
                            <p className="infoEgresado">Año de egreso</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Graduates;
