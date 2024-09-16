import '../Careers/careers.css';
import React, { useState, useEffect } from 'react';
import designJobs from '../../Data/DesignJobs';
import developmentJobs from '../../Data/DevelopmentJobs';
import CarouselCards from './SlidingCards';


const CurrentOpenings = () =>{

    const [designIndex, setDesignIndex] = useState(0);
    const [developmentIndex, setDevelopmentIndex] = useState(0);

    useEffect(() => {}, [designIndex]);

    useEffect(() => {}, [developmentIndex]);

    return(
        <div className="current-openings-container">
            <div className="current-openings-main-sections">
                <div className="current-openings-heading">Current Openings</div>
                <div className="current-openings-description">
                    We are always on the lookout for talented individuals who are
                    passionate about creating exceptional digital experiences. Whether
                    you're a designer, engineer, project manager, or have skills that
                    align with our agency's mission, we encourage you to explore our
                    open positions.
                </div>
            </div>
            <div className="openings-container">
                <CarouselCards 
                    jobs={designJobs} 
                    title="Design Job Openings"
                    currentIndex={designIndex}
                    setCurrentIndex={setDesignIndex}
                />

                <CarouselCards
                    jobs={developmentJobs} 
                    title="Development Job Openings"
                    currentIndex={developmentIndex}
                    setCurrentIndex={setDevelopmentIndex}
                />
            </div>
      </div>
    )
}

export default CurrentOpenings;