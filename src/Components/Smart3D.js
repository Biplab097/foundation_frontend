import React from 'react';
import image1 from './Images/2.3_Assign_weightages_First_Frame.png';
import image2 from './Images/2.4_Create_work_package_First_Frame.png';
import image3 from './Images/2.5_Associate_model_objects_First_Frame.png';
import './Styles/Section.css';

function Smart3D(){
    return(
    <div class="section">
        <h2>Smart 3D</h2>
        <table>
            <tr><td><img src={image1} class="images"/></td><td><img src={image2} class="images"/></td><td><img src={image3} class="images"/></td></tr>
            <tr><td class="titles">Assign Weightages</td><td class="titles">Create Work Package</td><td class="titles">Associate Model</td></tr>
        </table>
        <hr></hr>
    </div>
    )
}
export default Smart3D;