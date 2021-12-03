import React from 'react';

import historicPhoto from '../../assets/images/LPphoto.png';
import './styles.scss';

function LandingPage() {
    return (
        <>
            <div className="mainContainer">
                <div className="LPcontainer">

                    <h1 className="title">Bienvenido a la pagina de la Escuela de Educacion Secundaria Tecnica N°5</h1>
                    <h3 className="subtitle"> &quot;Amancio Wiliams&quot;</h3>
                    <div className="aboutUs data">
                        <div className="subtitleContainer">
                            <h2 className="subtitle">Sobre nosotros</h2>
                        </div>
                        <p max="1000" className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lorem non erat dapibus, eget condimentum nibh accumsan. Curabitur id eros erat. Vestibulum feugiat convallis justo, et blandit diam sagittis ac. Nulla sed nulla tempus nisi vulputate hendrerit consequat sed nulla. Nam vitae diam at dolor consequat semper. Etiam eu ipsum et lorem vehicula dapibus. Nunc ipsum orci, scelerisque ac risus vel, placerat finibus risus. Suspendisse ornare lectus nec nibh mattis posuere. Nulla in ex facilisis, iaculis massa a, cursus risus. </p>

                        <p max="1000" className="paragraph">Integer eleifend et orci in lobortis. Ut eget sem non metus rhoncus imperdiet in eu mauris. Mauris id est ex. Cras eget aliquam velit, non mattis lacus. Nunc imperdiet nulla dui, vitae malesuada eros imperdiet sed. Etiam lacinia maximus velit, et imperdiet mauris ultricies eget. Sed nulla lorem, euismod eu posuere nec, dapibus feugiat mi. Vivamus posuere orci vitae lorem ultrices, sed dictum leo ultrices. Fusce auctor, massa quis pharetra consectetur, arcu eros hendrerit mi, eget dictum nibh ligula id est.</p>
                    </div>
                    <div className="bottomLeft">
                        <div className="history data">
                            <div className="subtitleContainer">
                                <h3 className="subtitle">Un poco de historia</h3>
                            </div>
                            <p max="1000" className="paragraph">Vivamus et pellentesque mauris, a pharetra tortor. Praesent porttitor dignissim orci non tempus. Nullam ut eros ut nibh scelerisque ultrices in quis nibh. Nullam a blandit turpis. Quisque pretium eleifend porttitor. Sed scelerisque eros ut justo consequat dapibus. Quisque lacinia felis at tempus venenatis. Etiam pretium arcu laoreet arcu lacinia tempus. Proin quis nisl fermentum arcu mollis tincidunt. Aenean ac diam sit amet ante posuere pellentesque. Sed dolor nibh, sollicitudin ac libero nec, ultrices sagittis magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed suscipit dui ut risus iaculis fringilla. Praesent aliquet orci in ante elementum, nec consectetur orci aliquam.</p>
                            <img src={historicPhoto} alt="foto historica" className="photo" />
                        </div>
                    </div>
                    <div className="bottomRight">
                        <div className="chooseUs data">
                            <div className="subtitleContainer">
                                <h3 className="subtitle">por que elegirnos</h3>
                            </div>
                            <p max="1000" className="paragraph">Donec semper erat tortor, quis blandit turpis laoreet non. Vestibulum quis ante sed elit rhoncus sollicitudin non sit amet lorem. Quisque dapibus magna sollicitudin pellentesque molestie. Donec congue, quam eget convallis malesuada, leo erat consectetur magna, eu semper nisi lectus nec nisi. Integer lacinia arcu eu erat posuere, rutrum posuere velit accumsan. Nam aliquam semper mattis. Curabitur ac est ut mauris gravida egestas. Nulla facilisi. Suspendisse finibus, sapien quis placerat volutpat, lectus ex bibendum nibh, in imperdiet sapien dui non arcu. Nunc luctus ex tortor, sit amet pellentesque enim bibendum quis. Maecenas cursus sed elit nec tristique. Aenean mattis euismod leo ac mattis. Mauris scelerisque et nulla luctus dignissim. Nulla eu vulputate urna. Donec semper erat tortor, quis blandit turpis laoreet non. Vestibulum quis ante sed elit rhoncus sollicitudin non sit amet lorem. Quisque dapibus magna sollicitudin pellentesque molestie. Donec congue, quam eget convallis malesuada, leo erat consectetur magna, eu semper nisi lectus nec nisi. Integer lacinia arcu eu erat posuere, rutrum posuere velit accumsan. Nam aliquam semper mattis. Curabitur ac est ut mauris gravida egestas. Nulla facilisi. Suspendisse finibus, sapien quis placerat volutpat, lectus ex bibendum nibh, in imperdiet sapien dui non arcu. Nunc luctus ex tortor, sit amet pellentesque enim bibendum quis. Maecenas cursus sed elit nec tristique. Aenean mattis euismod leo ac mattis. Mauris scelerisque et nulla luctus dignissim. Nulla eu vulputate urna.</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="data">
                            <div className="subtitleContainer">
                                <h3 className="subtitle">Salida Laboral</h3>
                            </div>
                            <p max="1000" className="paragraph">Mauris vitae mi at eros commodo elementum. Donec eget cursus dui, sed dictum ante. Fusce lorem nunc, tempus nec arcu a, sodales vehicula nunc. Sed non vehicula sem. Nam vitae enim et nulla semper porta. Aliquam quam metus, venenatis at finibus vel, vehicula vitae velit. Curabitur gravida, felis et sagittis malesuada, dui metus hendrerit nisl, id condimentum nunc orci vitae augue. Nam pretium augue a luctus accumsan. Ut at euismod lorem, eget posuere nulla.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPage;
