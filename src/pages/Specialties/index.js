import React, { useState, useRef, useEffect } from 'react';

import './styles.scss';

function Specialties() {
    const [slideIndex, setSlideIndex] = useState(0);
    const slideshow = useRef(null);
    const autoSlide = useRef(null);

    const next = () => {
        console.log(slideshow);
        const slideLenght = slideshow.current.children.length;
        setSlideIndex((prevIndex) => (prevIndex === slideLenght - 1 ? 0 : prevIndex + 1));
    };
    const previous = () => {
        const slideLenght = slideshow.current.children.length;
        setSlideIndex((prevIndex) => (prevIndex === 0 ? slideLenght - 1 : prevIndex - 1));
    };
    const resetTimeout = () => {
        if (autoSlide.current) {
            clearTimeout(autoSlide.current);
        }
    };

    useEffect(() => {
        resetTimeout();

        autoSlide.current = setTimeout(() => {
            next();
        }, 5000);

        return () => {
            resetTimeout();
        };
    }, [slideIndex]);

    return (
        <>
            <div className="carousel">
                {/* <div className="container">
                    <div className="slide">
                        <h1>Lorem ipsum dolor sit</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias nulla tenetur pariatur magnam doloremque natus autem maxime
                            ullam? Dicta, fuga reprehenderit asperiores beatae cum debitis!
                        </p>
                        <button type="button">Buenas</button>
                    </div>
                </div> */}
                <div className="slideshow" ref={slideshow} style={{ transform: `translateX(${-slideIndex * 100}%)` }}>
                    <div className="slide Simage1">
                        <div className="filler">
                            null
                        </div>
                        <div className="bottomText">
                            <h2 className="Sinfo">Ciclo Basico</h2>
                            <p max="300" className="Sinfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut odio consequat, dignissim nisl non, molestie ex. Pellentesque ex lorem, sagittis eu malesuada vitae, iaculis a metus. Praesent non sem a velit vehicula dictum. In mauris est, imperdiet sed efficitur.</p>
                        </div>
                    </div>
                    <div className="slide Simage2">
                        <div className="filler">
                            null
                        </div>
                        <div className="bottomText">
                            <h2 className="Sinfo">Informatica</h2>
                            <p max="300" className="Sinfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut odio consequat, dignissim nisl non, molestie ex. Pellentesque ex lorem, sagittis eu malesuada vitae, iaculis a metus. Praesent non sem a velit vehicula dictum. In mauris est, imperdiet sed efficitur.</p>
                        </div>
                    </div>
                    <div className="slide Simage3">
                        <div className="filler">
                            null
                        </div>
                        <div className="bottomText">
                            <h2 className="Sinfo">Electronica</h2>
                            <p max="300" className="Sinfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut odio consequat, dignissim nisl non, molestie ex. Pellentesque ex lorem, sagittis eu malesuada vitae, iaculis a metus. Praesent non sem a velit vehicula dictum. In mauris est, imperdiet sed efficitur.</p>
                        </div>
                    </div>
                    <div className="slide Simage4">
                        <div className="filler">
                            null
                        </div>
                        <div className="bottomText">
                            <h2 className="Sinfo">Construcciones</h2>
                            <p max="300" className="Sinfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut odio consequat, dignissim nisl non, molestie ex. Pellentesque ex lorem, sagittis eu malesuada vitae, iaculis a metus. Praesent non sem a velit vehicula dictum. In mauris est, imperdiet sed efficitur.</p>
                        </div>
                    </div>
                </div>

                <div className="controls">
                    <button type="button" onClick={previous}>
                        <i className="fas fa-chevron-left" />
                    </button>
                    <button type="button" onClick={next}>
                        <i className="fas fa-chevron-right" />
                    </button>
                </div>
                <div className="overlay" />
            </div>

            <div className="bottomBanner">
                <div className="basicAcces">
                    <h2>Mira los planes de estudio de ciclo básico</h2>
                    <button type="button" className="basicInfo" onClick={() => { const modal = document.getElementById('cicloBasico'); modal.style.display = 'block'; }}> Info </button>
                </div>
                <div className="basicAcces Cscience">
                    <h2>Mira los planes de estudio de informatica</h2>
                    <button type="button" className="basicInfo" onClick={() => { const modal = document.getElementById('informatica'); modal.style.display = 'block'; }}> Info </button>
                </div>
                <div className="basicAcces electronics">
                    <h2>Mira los planes de estudio de electronica</h2>
                    <button type="button" className="basicInfo" onClick={() => { const modal = document.getElementById('electronica'); modal.style.display = 'block'; }}> Info </button>
                </div>
                <div className="basicAcces arquitecture">
                    <h2>Mira los planes de estudio de construcciones</h2>
                    <button type="button" className="basicInfo" onClick={() => { const modal = document.getElementById('construcciones'); modal.style.display = 'block'; }}> Info </button>
                </div>
            </div>
            <div className="modal" id="cicloBasico">
                <div className="modalContent">
                    <button type="button" className="close" onClick={() => { const modal = document.getElementById('cicloBasico'); modal.style.display = 'none'; }}>X</button>
                    <p>Documentos de ciclo basico</p>
                </div>
            </div>
            <div className="modal" id="informatica">
                <div className="modalContent">
                    <button type="button" className="close" onClick={() => { const modal = document.getElementById('informatica'); modal.style.display = 'none'; }}>X</button>
                    <p>Documentos de informatica</p>
                </div>
            </div>
            <div className="modal" id="electronica">
                <div className="modalContent">
                    <button type="button" className="close" onClick={() => { const modal = document.getElementById('electronica'); modal.style.display = 'none'; }}>X</button>
                    <p>Documentos de electronica</p>
                </div>
            </div>
            <div className="modal" id="construcciones">
                <div className="modalContent">
                    <button type="button" className="close" onClick={() => { const modal = document.getElementById('construcciones'); modal.style.display = 'none'; }}>X</button>
                    <p>Documentos de construcciones</p>
                </div>
            </div>
        </>
    );
}

export default Specialties;
