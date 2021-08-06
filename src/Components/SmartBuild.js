import React from 'react';
import image1 from './Images/1.1_Create_a_project_First_Frame.png';
import image2 from './Images/2.1_Schedule_management_First_Frame.png';
import image3 from './Images/2.2_3D_viewing_or_navigation_First_Frame.png';
import './Styles/Section.css';

function SmartBuild(){
    return(
<div class="section">
    <h2>Smart Build</h2>
    <table>
        <tr><td><img src={image1} class="images"/></td><td><img src={image2} class="images"/></td><td><img src={image3} class="images"/></td></tr>
        <tr><td class="titles">Create a project</td><td class="titles">Schedule Management</td><td class="titles">3D Viewing</td></tr>
    </table>
    <hr />
</div>
    )
}
export default SmartBuild;