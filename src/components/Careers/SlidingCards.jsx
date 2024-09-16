import React, { useRef, useEffect } from 'react';
import './careers.css';

const SlidingCards = ({ jobs, title, currentIndex, setCurrentIndex, itemsPerView = 3 }) => {

    const nextSlide = () => {
        const nextIndex = Math.min(currentIndex + itemsPerView, jobs.length - itemsPerView);
        setCurrentIndex(nextIndex);
    };
    
    const prevSlide = () => {
        const prevIndex = Math.max(currentIndex - itemsPerView, 0);
        setCurrentIndex(prevIndex);
    };


    function TruncatedDescription({ text, maxLines = 3 }) {
        const descRef = useRef(null);
    
        useEffect(() => {
            const el = descRef.current;
            if (el) {
                const lineHeight = parseInt(window.getComputedStyle(el).lineHeight);
                const maxHeight = lineHeight * maxLines;
                let truncated = text;
                while (el.offsetHeight > maxHeight && truncated.length > 0) {
                    truncated = truncated.slice(0, -1);
                    el.innerText = truncated + '...';
                }
            }
        }, [text, maxLines]);
    
        return <div ref={descRef} className="opening-description">{text}</div>;
    }


    return (
        <div className="carousel-section">
            <div className='type-of-opening-container'>
                <div className="type-of-opening">{title}</div>
            </div>

            <div className="carousel-container">
                <button className="nav-button prev" onClick={prevSlide} disabled={currentIndex === 0}>&lt;</button>
                <div className="carousel-wrapper">
                    <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}>
                        {jobs.map((item, index) => (
                            <div key={index} className={`card-carousel ${Math.abs(index - currentIndex) < itemsPerView ? 'transitioning' : ''}`}>
                                <div className="opening-card-icon-container">
                                    <img className="opening-card-icon" alt="" src={item.icon} />
                                </div>
                                <div className="opening-name">{item.title}</div>
                                <TruncatedDescription text={item.description} />
                                <div className="readmore-button-container">
                                    <a className="readmore-button">Read more</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="nav-button next" onClick={nextSlide} disabled={currentIndex >= jobs.length - itemsPerView}>&gt;</button>
            </div>
        </div>
    )
}

export default SlidingCards;
