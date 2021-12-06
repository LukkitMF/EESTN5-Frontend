import React from 'react';

import './styles.scss';

function AdmPanel() {
    return (
        <>

            <div className="Admcontainer">
                <div className="admPanel">
                    <h1 className="title">Panel de administración</h1>
                    <div className="admNavBar">
                        <button
                            type="button"
                            className="admBtn"
                            onClick={() => {
                                const adm = document.getElementById('admGaleria');
                                const none1 = document.getElementById('admEgresados');
                                const none2 = document.getElementById('admNoticias');
                                const none3 = document.getElementById('admEspecialidades');
                                adm.style.display = 'block';
                                none1.style.display = 'none';
                                none2.style.display = 'none';
                                none3.style.display = 'none';
                            }}
                        >
                            Galeria
                        </button>
                        <button
                            type="button"
                            className="admBtn"
                            onClick={() => {
                                const adm = document.getElementById('admEgresados');
                                const none1 = document.getElementById('admGaleria');
                                const none2 = document.getElementById('admNoticias');
                                const none3 = document.getElementById('admEspecialidades');
                                adm.style.display = 'block';
                                none1.style.display = 'none';
                                none2.style.display = 'none';
                                none3.style.display = 'none';
                            }}
                        >
                            Egresados
                        </button>
                        <button
                            type="button"
                            className="admBtn"
                            onClick={() => {
                                const adm = document.getElementById('admEspecialidades');
                                const none1 = document.getElementById('admGaleria');
                                const none2 = document.getElementById('admNoticias');
                                const none3 = document.getElementById('admEgresados');
                                adm.style.display = 'block';
                                none1.style.display = 'none';
                                none2.style.display = 'none';
                                none3.style.display = 'none';
                            }}
                        >
                            Documentos
                        </button>
                        <button
                            type="button"
                            className="admBtn"
                            onClick={() => {
                                const adm = document.getElementById('admNoticias');
                                const none1 = document.getElementById('admGaleria');
                                const none2 = document.getElementById('admEgresados');
                                const none3 = document.getElementById('admEspecialidades');
                                adm.style.display = 'block';
                                none1.style.display = 'none';
                                none2.style.display = 'none';
                                none3.style.display = 'none';
                            }}
                        >
                            Noticias
                        </button>
                    </div>
                    <div className="adm" id="admGaleria">
                        <h2 className="title">Subir foto</h2>
                        <form method="POST" className="form">
                            <p>Seleccione su imagen:</p>
                            <input type="file" className="fileInput" name="imageUpload" />
                            <input type="textarea" className="textInput" placeholder="Descripcion" name="descriptionUpload" />
                            <input type="submit" className="submit" value="ingresar" />
                        </form>
                        <h2 className="title">Modificar foto</h2>
                        <form method="POST" className="form">
                            <input type="number" className="textInput" placeholder="Id de imagen" name="imageIdModification" />
                            <p> Imagen nueva:</p>
                            <input type="file" className="fileInput" name="imageModification" />
                            <input type="text" className="textInput" placeholder="Descripcion nueva" name="descriptionModification" />
                            <input type="submit" className="submit" value="modificar" />
                        </form>
                        <h2 className="title">Eliminar foto</h2>
                        <form method="POST" className="form">
                            <input type="number" className="textInput" placeholder="Id de imagen" name="imageIdElimination" />
                            <input type="submit" className="submit" value="eliminar" />
                        </form>
                    </div>
                    <div className="adm" id="admEgresados">
                        <h2 className="title">Cargar Egresado</h2>
                        <form method="POST">
                            <input type="text" className="textInput" placeholder="Nombre/s" name="namesUpload" />
                            <input type="text" className="textInput" placeholder="Apellido/s" name="surnamesUpload" />
                            <input type="text" className="textInput" placeholder="ej: 1984" name="graduationYearUpload" />
                            <input type="text" list="specialtie" placeholder="Especialidades" className="textInput" name="specialtiesUpload" />
                            <datalist id="specialtie">
                                <option value="computerScience">Informatica</option>
                                <option value="electronics">Electronica</option>
                                <option value="arquitecture">Construcciones</option>
                            </datalist>
                            <input type="submit" className="submit" value="ingresar" />
                        </form>

                        <h2 className="title">Modificar Egresado</h2>
                        <form method="POST" className="form">
                            <input type="number" className="textInput" placeholder="Id de egresado" name="graduateIdModification" />
                            <input type="text" className="textInput" placeholder="Nombre/s" name="namesModification" />
                            <input type="text" className="textInput" placeholder="Apellido/s" name="surnamesModification" />
                            <input type="text" className="textInput" placeholder="ej: 1984" name="graduationYearModification" />
                            <input type="text" list="specialtie" placeholder="Especialidades" className="textInput" name="specialtiesModification" />
                            <datalist id="specialtie">
                                <option value="computerScience">Informatica</option>
                                <option value="electronics">Electronica</option>
                                <option value="arquitecture">Construcciones</option>
                            </datalist>
                            <input type="submit" className="submit" value="modificar" />
                        </form>

                        <h2 className="title">Eliminar Egresado</h2>
                        <form method="POST" className="form">
                            <input type="number" className="textInput" placeholder="Id de egresado" name="graduateIdElimination" />
                            <input type="submit" className="submit" value="eliminar" />
                        </form>
                    </div>

                    <div className="adm" id="admNoticias">
                        <form method="POST">
                            <h2 className="title">Ingresar noticia</h2>
                            <input type="text" className="textInput" placeholder="Titulo" name="titleUpload" />
                            <input type="text" className="textInput" placeholder="Subtitulo" name="subtitleUpload" />
                            <input type="text" className="textInput" placeholder="Cuerpo" name="bodyUpload" />
                            <input type="file" className="fileInput" name="newsImageUpload" />
                            <input type="submit" className="submit" value="ingresar" />
                        </form>

                        <form method="POST" className="form">
                            <h2 className="title">Modificar noticia</h2>
                            <input type="text" className="textInput" placeholder="Titulo" name="titleModification" />
                            <input type="text" className="textInput" placeholder="Subtitulo" name="subtitleModification" />
                            <input type="text" className="textInput" placeholder="Cuerpo" name="bodyModification" />
                            <input type="file" className="fileInput" name="newsImageModification" />
                            <input type="submit" className="submit" value="modificar" />
                        </form>

                        <form method="POST" className="form">
                            <h2 className="title">Eliminar noticia</h2>
                            <input type="number" placeholder="Id de noticia" className="textInput" name="newsIdElimination" />
                            <input type="submit" className="submit" value="eliminar" />
                        </form>
                    </div>

                    <div className="adm" id="admEspecialidades">
                        <form method="POST" className="form">
                            <h2 className="title">Subir archivo</h2>
                            <input type="file" className="fileInput" name="file" />
                            <input type="text" list="fileSpecialtie" placeholder="Area" className="textInput" name="fileSpecialtie" />
                            <datalist id="fileSpecialtie">
                                <option value="computerScience">Informatica</option>
                                <option value="electronics">Electronica</option>
                                <option value="arquitecture">Construcciones</option>
                                <option value="basicCycle">Ciclo Basico</option>
                            </datalist>
                            <input type="submit" className="submit" value="ingresar" />
                        </form>

                        <form method="POST" className="form">
                            <h2 className="title">Eliminar archivo</h2>
                            <input type="number" placeholder="Id de documento" className="textInput" name="fileIdElimination" />
                            <input type="submit" className="submit" value="eliminar" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdmPanel;
