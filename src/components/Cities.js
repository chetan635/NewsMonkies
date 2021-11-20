import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Cities extends Component {
    render() {
        // let {handleCountry} = this.props
        const handleCountry = ()=>{

        }
        return (
            <>
            {/* <div className="">hello</div> */}
             <div className = "container my-1" style={{display:'flex' , justifyContent:'center'}}>
                 <Link to="/in"><button type="button" style={{borderRadius:"20px"}} class="mx-3 my-2 btn btn-primary" to="/in">  India</button></Link>
                 <Link to="/us"><button type="button" style={{borderRadius:"20px"}} class="mx-3 my-2 btn btn-secondary" to="/us"> Unites States </button></Link>
                 <Link to="/cn"><button type="button" style={{borderRadius:"20px"}} class="mx-3 my-2 btn btn-success" to="/cn">  China</button></Link>
                 <Link to="/gb"><button type="button" style={{borderRadius:"20px"}} class="mx-3 my-2 btn btn-danger" to="/gb">  United Kindoms</button></Link>
                 <Link to="/fr"><button type="button" style={{borderRadius:"20px"}} class="mx-3 my-2 btn btn-warning"  to="/fr">  France</button></Link>
                 <Link to="/au"><button type="button" style={{borderRadius:"20px"}} class="mx-3 my-2 btn btn-info"  to="/au"> Austrila</button></Link>
                 <Link to="/jp"><button type="button" style={{borderRadius:"20px"}} class="mx-3 my-2 btn btn-danger" to="/jp"> Japan</button></Link>
                 <Link to="/it"><button type="button" style={{borderRadius:"20px"}} class="mx-3 my-2 btn btn-success"  to="/it"> Italy</button></Link>
                 <Link to="/br"><button type="button" style={{borderRadius:"20px"}} class="mx-3 my-2 btn btn-primary" to="/br">  Brazil</button></Link>
             </div>
            </>
            
        )
    }
}
