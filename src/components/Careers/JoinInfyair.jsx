import React from 'react';
import Card from 'react-bootstrap/Card';
import '../Careers/careers.css';


const  JoinInfyair =() => {
  return (
    <div className='join-infyair-section'>
        <div className='join-infyair-main-section'>
            <div className='join-infyair-heading-container'>
                <h1 className='join-infyair-heading'>
                    Join INFYAIR: We connect Talent with Opportunities
                </h1>
            </div>
            <div>
                <p className='join-infyair-description'>
                    At INFYAIR, we believe that the success of our company lies in the             
                    talent, passion, and dedication of our team members. We thrive on
                    innovation, creativity, and collaboration. If you're ready to make a
                    difference and contribute to transformative projects, we invite you
                    to explore career opportunities with us. Apply Now!
                </p>
            </div>
            <div className='what-happen-at-infyair-section'>
                <p className='What-happens-text'>What happens at INFYAIR?</p>
            </div>
            <div className="career-cards-container">
                <Card className="careers-page-single-card">
                    <Card.Body>
                    <Card.Title className="single-card-heading">Top-Notch Projects</Card.Title>
                    <Card.Text className="single-card-discription">
                        We provide opportunities to work on exciting and innovating technologies
                        across various domains. We support in developing Proof-of-Concepts
                        (PoC) and use cases to build end-user applications. We believe in the
                        potential of cutting-edge technologies in digital transformation.
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="careers-page-single-card">
                    <Card.Body>
                    <Card.Title className="single-card-heading">Supportive Environment</Card.Title>
                    <Card.Text className="single-card-discription">
                        At INFYAIR, we hear you! we work in collaboration to resolve the issues
                        you encounter in the day-to-day life. We encourage diversity, inclusivity,
                        and work-life balance. A positive and supportive work environent that
                        fosters teamwork and a sense of belonging. 
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="careers-page-single-card">
                    <Card.Body>
                    <Card.Title className="single-card-heading">Development and Growth</Card.Title>
                    <Card.Text className="single-card-discription">
                        We believe in continuous learning and provide access to ongoing training
                        and certification opportunities to keep your professional skills current and
                        advance. At INFYAIR, you'll have the chance to expand your skill set and
                        stay up-to-date with the latest trends, technologies and tools.
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="careers-page-single-card">
                    <Card.Body>
                    <Card.Title className="single-card-heading">Smart Work and Dedication</Card.Title>
                    <Card.Text className="single-card-discription">
                        As a young company we overcome many complex challenges with our
                        strong dedication and willingness to grow in this competitive market. We
                        combine consistent smart work and perseverance with strategic thinking
                        and innovative problem-solving to make a real impact.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>  
        </div>
    </div>
  )
}

export default JoinInfyair