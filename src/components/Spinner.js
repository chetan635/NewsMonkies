import React, { Component } from 'react'
import Loading from './Loading.gif'
export default class Spinner extends Component {
    render() {
        return (
            <div className=" container d-flex align-items-center justify-content-center">
                <img src={Loading} alt={Loading} />
            </div>
    //         <div className="spinner-border container d-flex align-items-center justify-content-center" style={{width: "6rem " , height: "6rem"}} role="status">
    //     <span className="visually-hidden">Loading...</span>
    //   </div>
        )
    }
}
