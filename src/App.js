import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Cities from './components/Cities';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

let handleCountry = "in"

export default class App extends Component {



  render() {
   
    return (
      <div>
        <Router>
          
          {/* <News pageSize={5} category="science" country="in"/> */}
          <Navbar/>
          <Cities/>
          {/* switch */}
          <Switch>
          <Route exact path="/">
              
              <News key="general" pageSize={15} category="general" country={handleCountry}/>
          </Route>
          <Route exact path="/business">
              <News key="business" pageSize={15} category="business" country={handleCountry}/>
          </Route>
          <Route exact path="/entertainment">
              <News key="entertainment" pageSize={15} category="entertainment" country={handleCountry}/>
          </Route>
          <Route exact path="/health">
              <News key="health" pageSize={15} category="health" country={handleCountry}/>
          </Route>
          <Route exact path="/general">
              <News key="general" pageSize={15} category="general" country={handleCountry}/>
          </Route>
          <Route exact path="/science">
             <News key="science" pageSize={15} category="science" country={handleCountry}/>
          </Route>
          <Route exact path="/technology">
              <News key="technology" pageSize={15} category="technology" country={handleCountry}/>
          </Route>
          <Route exact path="/sports"><News key="sports" pageSize={15} category="sports" country={handleCountry}/></Route>

          <Route exact path="/in"> {handleCountry="in"}  <News key="in" pageSize={15} category="sports" country={handleCountry}/></Route>
          <Route exact path="/us"> {handleCountry="us"} <News key="us" pageSize={15} category="sports" country={handleCountry} /></Route>
          <Route exact path="/cn">{handleCountry="cn"}<News key="cn" pageSize={15} category="sports" country={handleCountry}/></Route>
          <Route exact path="/gb">{handleCountry="gb"}<News key="gb" pageSize={15} category="sports" country={handleCountry}/></Route>
          <Route exact path="/fr">{handleCountry="fr"}<News key="fr" pageSize={15} category="sports" country={handleCountry}/></Route>
          <Route exact path="/it">{handleCountry="it"}<News key="it" pageSize={15} category="sports" country={handleCountry}/></Route>
          <Route exact path="/br">{handleCountry="br"}<News key="br" pageSize={15} category="sports" country={handleCountry}/></Route>
          <Route exact path="/au">{handleCountry="au"}<News key="au" pageSize={15} category="sports" country={handleCountry}/></Route>
          <Route exact path="/jp">{handleCountry="jp"}<News key="jp" pageSize={15} category="sports" country={handleCountry}/></Route>
        </Switch>


        </Router>
        
      </div>
    )
  }
}

// business
// entertainment
// general
// health
// science
// sports
// technology