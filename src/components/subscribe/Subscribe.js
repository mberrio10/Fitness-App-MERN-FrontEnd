import './subscribe.css'
import FitGirl from '../../images/fit-girl.jpg' 

import React from 'react'

const Subscribe = () => {
  return (
    <div className="container-fluid">
        <div className="row align-items-center">
            <div className="col-md-7 text-center">
                <img src={FitGirl} alt="Subscribe" className="w-70" />
            </div>
            <div className="col-md-5 text-center text-md-start">
                <h3 className="text-capitalize display-3 heading-secondary">subscribe now</h3>
                <span className="fs-1 subtitles">dont miss any of our articles & events</span>
                <p className="lead fs-3 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, neque quae. Nihil nam sapiente dolore? Cupiditate, libero modi corrupti provident saepe harum suscipit itaque, sit, quasi dolor aliquid atque voluptates!</p>
                <a href="/#" className="fs-2">join now</a>
            </div>
        </div>
    </div>
  )
}

export default Subscribe