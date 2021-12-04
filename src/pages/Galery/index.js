import React from 'react';
import gray from '../../assets/images/LPphoto.png';

import './styles.scss';

function Galery() {
    return (
        <>

            <div className="Gcontainer">
                <div className="galery">
                    <h1 className="title">Galeria</h1>
                    {/* El div photoContainer es un ejemplo del formato a aplicar */}
                    {/* debe de ser insertado desde backend con los datos correspondientes */}
                    <div className="photoContainer">
                        <div className="modal" id="foto1">
                            <div className="modalContent">
                                <button type="button" className="close" onClick={() => { const modal = document.getElementById('foto1'); modal.style.display = 'none'; }}>X</button>
                                <img src={gray} alt="foto" id="foto1" className="hiddenPhoto" />
                            </div>
                        </div>
                        <button type="button" className="photoButton" onClick={() => { const modal = document.getElementById('foto1'); modal.style.display = 'block'; }}>
                            <img className="Gphoto" src={gray} alt="HistoricPhoto" />
                        </button>
                        <p className="description">Descripcion</p>
                    </div>

                    <div className="photoContainer">
                        <div className="modal" id="foto2">
                            <div className="modalContent">
                                <button type="button" className="close" onClick={() => { const modal = document.getElementById('foto2'); modal.style.display = 'none'; }}>X</button>
                                <img src={gray} alt="foto" id="foto2" className="hiddenPhoto" />
                            </div>
                        </div>
                        <button type="button" className="photoButton" onClick={() => { const modal = document.getElementById('foto2'); modal.style.display = 'block'; }}>
                            <img className="Gphoto" src={gray} alt="HistoricPhoto" />
                        </button>
                        <p className="description">Descripcion</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Galery;
