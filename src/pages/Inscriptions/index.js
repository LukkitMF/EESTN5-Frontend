import React from 'react';

import './styles.scss';

function Inscriptions() {
    return (
        <>

            <div className="Icontainer">
                <div className="ingreso">
                    <h1 className="title">Ingreso</h1>
                    <div className="ingresoLeft">
                        <div className="inscripcionFecha">
                            <p className="avisoInscripciones">Inscripciones 2022 abiertas hasta el ##/##/#### </p>
                            <p className="avisoInscripciones" max="1000">Reinscripciones 2022 abiertas para alumnos dedesde 2do a 6to que promocionaron los dias 27, 28 y 29 de Diciembre, 23, 25 o 25 de Febrero y 2 o 3 de Marzo</p>
                        </div>
                        <div className="inscripcionRequisitos">
                            <div className="subtitleContainer">
                                <p className="subtitle">¿Que necesito para la inscripcion?</p>
                            </div>
                            <p max="1000">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum ipsum eu mattis lobortis. Phasellus rhoncus, nibh posuere congue pulvinar, lorem arcu blandit sapien, vel porta massa ligula eget elit. Suspendisse nibh neque, laoreet quis dui at, bibendum vulputate metus. Morbi id rutrum enim, nec sagittis lacus. Donec lobortis dictum finibus. Phasellus fringilla id quam nec posuere. Nullam ipsum lorem, convallis ac pharetra id, volutpat porta dolor. Ut congue ligula tortor, sed efficitur mauris pulvinar eget. Praesent urna lectus, finibus quis scelerisque sit amet, ullamcorper a risus. Sed non mauris ut ligula luctus egestas non vel nulla. Sed et ante luctus, iaculis odio quis, sollicitudin sem. Duis nec diam consequat, viverra turpis quis, sollicitudin enim. Phasellus aliquet tortor quis tincidunt porta. Cras bibendum suscipit sapien non mattis. Fusce et laoreet nibh. Donec fringilla mollis velit et blandit. Nullam auctor in orci non venenatis. Nam ultrices mauris id lacus egestas mollis</p>
                        </div>
                    </div>
                    <div className="ingresoRight">
                        <div className="ingresoPasos">
                            <div className="subtitleContainer">
                                <p className="subtitle">¿Como me inscribo?</p>
                            </div>
                            <p max="1000">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum ipsum eu mattis lobortis. Phasellus rhoncus, nibh posuere congue pulvinar, lorem arcu blandit sapien, vel porta massa ligula eget elit. Suspendisse nibh neque, laoreet quis dui at, bibendum vulputate metus. Morbi id rutrum enim, nec sagittis lacus. Donec lobortis dictum finibus. Phasellus fringilla id quam nec posuere. Nullam ipsum lorem, convallis ac pharetra id, volutpat porta dolor. Ut congue ligula tortor, sed efficitur mauris pulvinar eget. Praesent urna lectus, finibus quis scelerisque sit amet, ullamcorper a risus. Sed non mauris ut ligula luctus egestas non vel nulla. Sed et ante luctus, iaculis odio quis, sollicitudin sem. Duis nec diam consequat, viverra turpis quis, sollicitudin enim. Phasellus aliquet tortor quis tincidunt porta. Cras bibendum suscipit sapien non mattis. Fusce et laoreet nibh. Donec fringilla mollis velit et blandit. Nullam auctor in orci non venenatis. Nam ultrices mauris id lacus egestas mollis</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Inscriptions;
