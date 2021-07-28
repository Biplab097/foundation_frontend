import React from 'react';
import image1 from './Images/2.3_Assign_weightages_First_Frame.png';
import image2 from './Images/2.4_Create_work_package_First_Frame.png';
import image3 from './Images/2.5_Associate_model_objects_First_Frame.png';
import './Styles/Section.css';
import 'react-alice-carousel/lib/alice-carousel.css';
//import {Carousel} from '3d-react-carousal';
import 'react-alice-carousel/lib/alice-carousel.css';
import Carousel from 'react-elastic-carousel'
import { render } from '@testing-library/react';
// var Carousel1 = require( '3d-react-carousal').Carousel;

// class Smart3D extends React.Component {
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
//          <h2 >Smart 3D</h2>
          
//           <Carousel1 slides={slides} autoplay={true} interval={10000}/>
//           <br />
//           <br />
//   {/* Carousal.Carousal because of unpkg in developement use npm import and use only {Carousal}*/}
//         </div>
//       );
//     }
//   }
function Smart3D(){
    return(
        <div>
            <h2>Smart 3D</h2>
            <Carousel itemsToShow={3} autoPlaySpeed={10000} disableArrowsOnEnd={true}>
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
        </div>

    )
}
export default Smart3D;