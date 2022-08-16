import './pricePlans.css'
import React from 'react'

const PricePlans = () => {
  return (
    <div className="container">
        <div className="text-center heading-props">
            <h2 className="heading-secondary display-3 mt-3">Personal Training Plans</h2>
            <span className="fs-1 subtitles">choose your plan and get stronger with me</span>
        </div>
        <div className="card-group text-center pricePlans-group">
            <div className="card mb-4 rounded-3 pricePlan-card">
                <div className="card-header py-3 bg-header">
                    <h4 className="my-0 fw-normal display-6">Free</h4>
                </div>
                <div className="card-body plan-body">
                    <h1 className="card-title display-2 fw-normal">$0<small className="text-muted fw-light">/mo</small></h1>
                    <ul className="list-unstyled mt-5 mb-5">
                        <li>10 users included</li>
                        <li>2 GB of storage</li>
                        <li>Email support</li>
                        <li>Help center access</li>
                    </ul>
                    <button type="button" className="w-100 btn btn-lg btn-plan">Sign up for free</button>
                </div>
            </div>
            <div className="card mb-4 rounded-3 pricePlan-card">
                <div className="card-header py-3 bg-header">
                    <h4 className="my-0 fw-normal display-6">Pro</h4>
                </div>
                <div className="card-body plan-body">
                    <h1 className="card-title display-2 fw-normal">$15<small className="text-muted fw-light">/mo</small></h1>
                    <ul className="list-unstyled mt-5 mb-5">
                        <li>20 users included</li>
                        <li>10 GB of storage</li>
                        <li>Priority email support</li>
                        <li>Help center access</li>
                    </ul>
                    <button type="button" className="w-100 btn btn-lg btn-plan">Get started</button>
                </div>
            </div>
            <div className="card mb-4 rounded-3 pricePlan-card">
                <div className="card-header py-3 bg-header">
                    <h4 className="my-0 fw-normal display-6">Enterprise</h4>
                </div>
                <div className="card-body plan-body">
                    <h1 className="card-title display-2 fw-normal">$29<small className="text-muted fw-light">/mo</small></h1>
                    <ul className="list-unstyled mt-5 mb-5">
                        <li>30 users included</li>
                        <li>15 GB of storage</li>
                        <li>Phone and email support</li>
                        <li>Help center access</li>
                    </ul>
                    <button type="button" className="w-100 btn btn-lg btn-plan">Contact us</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PricePlans