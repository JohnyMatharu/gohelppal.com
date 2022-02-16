//import React, { useState, useEffect }from 'react';
import './about.css';
import React from 'react';
import pic1 from '../pictures/1.jpeg';
import pic2 from '../pictures/2.jpeg';
import pic3 from '../pictures/3.jpeg';

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import $ from 'jquery';
/*
export default function About(props) {
    let [count, setCount] = useState(0)
    let [name, setName] = useState("")

    useEffect(() => {
       setName(props.myName)
    }, [])

    return (
        <div onClick={() => {setCount(count + 1)}}>
            Hi my name is {name} and the Count:{count}
        </div>
    )
}
*/
$(function() {
  'use strict';

  var scrollingValue = 150;
  var scrollbarPosition = 10;

  function getMaxChildWidth( elm ) {
    var childrenWidth = $.map($('>*', elm), function(el) { return $(el).width() });
    var max = 0;
    for (var i = 0; i < childrenWidth.length; i++) {
      max = childrenWidth[i] > max ? childrenWidth[i] : max;
    }
    return max;
  }

  function getScrollingValue(toLeft, ctx) {

    if (toLeft) {
      return scrollbarPosition < 1 ? 0 : scrollingValue;
    }
    return scrollbarPosition >= getMaxChildWidth(ctx) ? 0 : scrollingValue;
  }

  $('.scroll-btn.scroll-to-left').on('click', function() {
    $(this).parent().scrollLeft(
      scrollbarPosition -= getScrollingValue(true, $(this).parent())
    );
  });

  $('.scroll-btn.scroll-to-right').on('click', function() {
    $(this).parent().scrollLeft(
      scrollbarPosition += getScrollingValue(false, $(this).parent())
    );
  });
});



export default function AboutMe() {
    return (
        <section>
      <MDBContainer id="size">
          <div className="backround">
          <h3 className="headingBack" style={{ fontSize: '24px', fontFamily: 'Cambria', fontWeight: 'bold', color: 'white' }}>2021 projects</h3>
     
<div id= "button">
  {/* add this to increase the icon size, style={{ fontSize: '24px' }} */}
    <div id="height1"><h3 style={{fontWeight: "bold", fontSize: 24, fontFamily: 'Cambria', color: '00003a' }}>myBid</h3>
    <h6><a href='https://github.com/PrimalOrB/myBid'><i class="fab fa-github" style={{fontSize: '21px'}}></i></a>
    </h6><a href='https://mybid-live.herokuapp.com/'><img id ="pic1" src={pic1}></img></a></div>
  <div id="height2"><h3 style={{fontWeight: "bold", fontSize: 24, fontFamily: 'Cambria', color: '00003a' }}>Tech Blog</h3>
  <h6><a href='https://github.com/JohnyMatharu/Tech-Blog'><i class="fab fa-github" style={{ fontSize: '21px' }}></i></a>
  </h6><a href='https://stormy-castle-86583.herokuapp.com/'><img id ="pic2" src={pic2}></img></a></div>
  <div id="height3"><h3 style={{fontWeight: "bold", fontSize: 24, fontFamily: 'Cambria', color: '00003a' }}>Maunny</h3>
  <h6><a href='https://github.com/JohnyMatharu/Maunny/tree/main'><i class="fab fa-github" style={{ fontSize: '21px' }}></i></a>
  </h6><a href='https://johnymatharu.github.io/Maunny/'><img id ="pic3" src={pic3}></img></a></div>
  
  
  <button class="scroll-btn scroll-to-left btn btn-light btn-arrow-left" type="button"><i class="fas fa-chevron-left"></i></button>
    <button class="scroll-btn scroll-to-right btn btn-light btn-arrodw-right" type="button"><i class="fas fa-chevron-right"></i></button>
         
   </div>
          </div>
    </MDBContainer >  
    </section>    
    )
}
