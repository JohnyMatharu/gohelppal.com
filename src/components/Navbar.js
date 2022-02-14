import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";
// import the library

import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class Navbar extends React.Component {

  render() {    
    const { location } = this.props;
        const isHome = location.pathname === "/";
    return (
      <div className="nav">

      <div id ="sectionOne"><h3 style={{ paddingBottom: '1px', fontSize: '24px', fontFamily: 'Tahoma', fontWeight: 'bold' }}><span style={{color:'#4F9CC8'}}>GoHelpPal</span></h3></div>
    {/* <div id ="sectionOne"><h3 style={{ paddingBottom: '1px', fontSize: '24px', fontFamily: 'Verdana', fontWeight: 'bold' }}><span style={{color:'#13d34b'}}>Go</span><span style={{color:'#3c6cd2'}}>Help</span><span style={{color:'#b429b0'}}>Pal</span></h3></div>
     */}


      <div id ="sectionTwo">  
          <Link to="/" className="Nav__brand">
          </Link>
             
              <div className="aboutMe">
              <NavLink className="firstLink" to="/about" activeStyle={ { color: "#b429b0" } }
                             style={ isHome ? { color: "#b429b0" } : {} }>
                                
      <div className="App">
        <FontAwesomeIcon icon={faHome} style={{ fontSize: '24px' }}/>
    </div>
                               
                               </NavLink></div>
            
              <div className="Resume">
                <NavLink className="fourthLink" to="/resume" activeStyle={{color: "#b429b0"}}>Johny Matharu</NavLink>
              </div>
      </div>
      
      </div>
      
    );
  }
} 
  
const NavbarWithRouter = withRouter(Navbar);

export default NavbarWithRouter;



      
      
//https://github.com/JohnnyMatharu/Workday-Scheduler/blob/main/index.html
