import './onlineClasses.css'
import YogaClass from '../../images/yoga-online.jpg'
import Workout from '../../images/img-1.jpg'
import Powerlift from '../../images/powerlift.jpg'

import React from 'react'

const OnlineClasses = () => {
  return (
    <div className="container">
        <div className="text-center">
            <h2 className="heading-secondary display-3 margin-bottom-big">Online Classes</h2>
        </div>
        <div className="row justify-content-around">
            <div className="col-md-3 mt-2 mb-4">
                <div className="card border-0 card-classes">
                    <img src={YogaClass} alt='The Post' className="card-img-top onlineClasses-img"/>
                    <div className="text-center card-body onlineClasses-cardBody">
                        <div className="icons d-flex justify-content-between">
                            <span className="fs-3 text-capitalize"> <i className="fas fa-calendar onlineClasses-icon pe-2"></i> mon - sat </span>
                            <span className="fs-3 text-capitalize"> <i className="fas fa-clock onlineClasses-icon pe-2"></i> 1 hours </span>
                        </div>
                        <h3 className="card-title fw-bold class-heading">Maximize Your Dumbbell Rutine</h3>
                        <a href="/#" className='btn btn-primary fs-5'>Read More</a>                      
                    </div>
                </div>
            </div>
            <div className="col-md-3 mt-2 mb-4">
                <div className="card border-0 card-classes">
                    <img src={Workout} alt='The Post' className="card-img-top onlineClasses-img"/>
                    <div className="text-center card-body onlineClasses-cardBody">
                        <div className="icons d-flex justify-content-between">
                            <span className="fs-3 text-capitalize"> <i className="fas fa-calendar onlineClasses-icon pe-2"></i> mon - sat </span>
                            <span className="fs-3 text-capitalize"> <i className="fas fa-clock onlineClasses-icon pe-2"></i> 1 hours </span>
                        </div>
                        <h3 className="card-title fw-bold class-heading">Maximize Your Dumbbell Rutine</h3>
                        <a href="/#" className='btn btn-primary fs-5'>Read More</a>                      
                    </div>
                </div>
            </div>
            <div className="col-md-3 mt-2 mb-4">
                <div className="card border-0 card-classes">
                    <img src={Powerlift} alt='The Post' className="card-img-top onlineClasses-img"/>
                    <div className="text-center card-body onlineClasses-cardBody">
                        <div className="icons d-flex justify-content-between">
                            <span className="fs-3 text-capitalize"> <i className="fas fa-calendar onlineClasses-icon pe-2"></i> mon - sat </span>
                            <span className="fs-3 text-capitalize"> <i className="fas fa-clock onlineClasses-icon pe-2"></i> 1 hours </span>
                        </div>
                        <h3 className="card-title fw-bold class-heading">Maximize Your Dumbbell Rutine</h3>
                        <a href="/#" className='btn btn-primary fs-5'>Read More</a>                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OnlineClasses