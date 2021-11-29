import React, { useState, useEffect } from 'react';
import modal from './modal.js'

import './styles.scss';

function Chatbot() {
    const [isFixed, setFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentPositionY = window.pageYOffset;

            if (currentPositionY > 35) {
                setFixed(true);
            } else {
                setFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
        <div id="button_div"><button id="myBtn" class="modal-button">Consultar</button></div>
        
        <div id="myModal" class="modal">

            <div class="modal-content">
                <button class="close">&times;</button>

            
            <div id="answer"></div>
        </div>

        </div>

        <button id="myBtn">Consultas</button>

        <div id="myModal" class="modal">

        <div class="modal-content">
            <span class="close">&times;</span>
            <div id="questions">
                <ul>
                    <li>
                        <button class="question" onclick={modal.answer(1)} id="myBtn2" class="modal-button">¿Dónde queda el colegio?</button>
                        
                    </li>
                    <li>
                        <button class="question" onclick={modal.answer(2)} id="myBtn3" class="modal-button">¿Cuàl es el teléfono de la escuela?</button>
                        
                    </li>
                    <li>
                        <button class="question" onclick={modal.answer(3)} id="myBtn4">¿Cuáles son los horarios?</button>
                        
                    </li>
                </ul>
                <ul>
                    <li>
                        <button class="question" onclick={modal.answer(1)} id="myBtn2" class="modal-button">¿Dónde queda el colegio?</button>
                        
                    </li>
                    <li>
                        <button class="question" onclick={modal.answer(2)} id="myBtn3" class="modal-button">¿Cuàl es el teléfono de la escuela?</button>
                        
                    </li>
                    <li>
                        <button class="question" onclick={modal.answer(3)} id="myBtn4">¿Cuáles son los horarios?</button>
                        
                    </li>
                </ul>
            </div>
            <div id="chat-content">
                <img id="botpic" src="static/botpic.jpg" width="50px" height="50px" />

                <div id="answer"> 
                    <p id="answer-text">def answer</p>
                </div>
            </div>

        </div>

        </div>
        </>
    );
}

export default Chatbot;
