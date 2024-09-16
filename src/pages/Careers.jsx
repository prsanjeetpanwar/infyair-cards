import React from 'react'
import CareersHead from '../components/Careers/CareersHead';
import JoinInfyair from '../components/Careers/JoinInfyair';
import CurrentOpenings from '../components/Careers/CurrentOpenings';

const Careers = () => {
  return (
    <div className='careers-page'>
        <CareersHead/>
        <JoinInfyair/>
        <CurrentOpenings/>
    </div>
  )
}

export default Careers;