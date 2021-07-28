import React,{Component} from 'react';
import image1 from './Images/1.1_Create_a_project_First_Frame.png';
import image2 from './Images/2.1_Schedule_management_First_Frame.png';
import image3 from './Images/2.2_3D_viewing_or_navigation_First_Frame.png';
import './Styles/Section.css';
import AliceCarousel from 'react-alice-carousel';
//import {Carousel} from '3d-react-carousal';
import 'react-alice-carousel/lib/alice-carousel.css';
import Carousel from 'react-elastic-carousel'
import { render } from '@testing-library/react';
// var Carousel1 = require( '3d-react-carousal').Carousel;

// class SmartBuild extends React.Component {
//     constructor(props) {
//       super(props)
//     }
    
//     render() {
//       let slides = [
//         <img  src={image1} alt="1" class="images"/>,
//       <img  src={image2} alt="2" class="images"/>  ,
//       <img  src={image3} alt="3" class="images"/>   ];
//       return (
//         <div >
//          <h2 >Smart Build</h2>
          
//           <Carousel1 slides={slides} autoplay={true} interval={10000}/>
//           <br />
//           <br />
//           <hr />
//   {/* Carousal.Carousal because of unpkg in developement use npm import and use only {Carousal}*/}
//         </div>
//       );
//     }
//   }


function SmartBuild(){
    return(
        <div>
            <h2>Smart Build</h2>
            <Carousel itemsToShow={3} transitionMs={10000} disableArrowsOnEnd={true}>
            <div class="cells">
                <img  src={image1} alt="1" class="images1"/>
            </div>
            <div class="cells">
                <img  src={image2} alt="1" class="images1"/>
            </div>
            <div class="cells">
                <img  src={image3} alt="1" class="images1"/>
            </div>
            <div class="cells">
                <img  src={image1} alt="1" class="images1"/>
            </div>
  
</Carousel>
<hr class="tiles"/>
        </div>

    )
}
export default SmartBuild;