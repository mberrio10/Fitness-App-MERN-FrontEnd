import "./features.css";
import Gym from '../../images/gym.png'
import Yoga from '../../images/yoga.png'
import Nutrition from '../../images/nutrition.png'

import React from 'react'

const Features = () => {
  return (
    <div className="container-fluid d-flex justify-content-evenly align-items-center align-content-center pt-4">
        <div className="feature w-25 text-center">
            <div className="feature-box">
                <h3 className="display-1 fw-bolder featureTop">40+</h3>
                <h3 className="h1 fw-bolder">Workout Challenges</h3>
            </div>
        </div>
        <div className="feature w-25 text-center">
            <div className="feature-box">
                <img src={Gym} className="feature-icon" alt="Gym" />
                <h3 className="h1 fw-bolder">Personal Training</h3>
            </div>
        </div>
        <div className="feature w-25 text-center">
            <div className="feature-box">
                <img src={Yoga} className="feature-icon" alt="Yoga Pose" />
                <h3 className="h1 fw-bolder">Online Yoga Classes</h3>
            </div>
        </div>
        <div className="feature w-25 text-center">
            <div className="feature-box">
                <img src={Nutrition} className="feature-icon" alt="Nutrition" />
                <h3 className="h1 fw-bolder">Nutrition guide blog</h3>
            </div>
        </div>
    </div>
  )
}

export default Features