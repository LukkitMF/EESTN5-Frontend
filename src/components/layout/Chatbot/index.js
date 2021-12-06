import React from 'react';

import './styles.scss';
import botpic from '../../../assets/images/botpic.jpg';

function Chatbot() {
    return (
        <>
            <div id="button_div">

                <button type="button" id="myBtn" className="close" onClick={() => { const modal = document.getElementById('myModal'); modal.style.display = 'block'; }}>?</button>

            </div>

            <div id="myModal" className="modal">

                <button type="button" id="myBtn" className="close">?</button>

                <div className="modal-content">
                    <button type="button" className="close" onClick={() => { const modal = document.getElementById('myModal'); modal.style.display = 'none'; }}>&times;</button>
                    <div id="questions">
                        <ul>
                            <li>
                                <button type="button" className="question modal-button" onClick={() => { const answerDiv = document.getElementById('answer-text'); answerDiv.innerHTML = 'Juan B Justo 4287'; }} id="myBtn2">¿Dónde queda el colegio?</button>

                            </li>
                            <li>
                                <button type="button" className="question modal-button" onClick={() => { const answerDiv = document.getElementById('answer-text'); answerDiv.innerHTML = 'Juan B Justo 4287'; }} id="myBtn3">¿Cuàl es el teléfono de la escuela?</button>

                            </li>
                            <li>
                                <button type="button" className="question modal-button" onClick={() => { const answerDiv = document.getElementById('answer-text'); answerDiv.innerHTML = 'Para revisar los horarios de tu curso entrá a la pestaña de Departamentos'; }} id="myBtn4">¿Cuáles son los horarios?</button>

                            </li>
                        </ul>
                        <ul>
                            <li>
                                <button type="button" className="question modal-button" onClick={() => { const answerDiv = document.getElementById('answer-text'); answerDiv.innerHTML = 'Juan B Justo 4287'; }} id="myBtn2">¿Dónde queda el colegio?</button>

                            </li>
                            <li>
                                <button type="button" className="question modal-button" onClick={() => { const answerDiv = document.getElementById('answer-text'); answerDiv.innerHTML = 'Juan B Justo 4287'; }} id="myBtn3">¿Cuàl es el teléfono de la escuela?</button>

                            </li>
                            <li>
                                <button type="button" className="question" onClick={() => { const answerDiv = document.getElementById('answer-text'); answerDiv.innerHTML = 'Juan B Justo 4287'; }} id="myBtn4">¿Cuáles son los horarios?</button>

                            </li>
                        </ul>
                    </div>
                    <div id="chat-content">
                        <img id="botpic" src={botpic} width="50px" height="50px" alt="imagen" />

                        <div id="answer">
                            <p id="answer-text" className="botText">...</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Chatbot;
