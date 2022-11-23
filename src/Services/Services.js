import React from 'react';
import './Services.css';
import HeartEmoji from '../../src/img/heartemoji.png';
import Glasses from '../../src/img/glasses.png';
import Humble from '../../src/img/humble.png';
import Card from '../Components/Card/Card';
import Resume from './MARJAN.pdf'
const Services = () => {
    return (
        <div className="services">
            {/* left side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing explicabo quasi fugiat elit.
                    <br />
                    dolore assumenda hic magni illum rerum
                </span>
                <a href={Resume} download>
                    <button className='button s-button'>Download CV</button>
                </a>

                <div className='blur s-blur1' style={{ background: '#ABF1FF94' }}></div>
            </div>
            {/* right side 1st card*/}
            <div className="cards">
                <div style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={'Figma, Sketch, Photoshop, Adobe, Adobe xd'}
                    />
                </div>
                {/* second card */}
                <div style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={'Html, Css, JavaScript, React'}
                    />
                </div>
                {/* 3rd card */}
                <div style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        detail={'Html, Css, JavaScript, React'}
                    />
                </div>
                <div className='blur s-blur2' style={{ background: "var(--purple)" }}></div>
            </div>

        </div>
    );
};

export default Services;