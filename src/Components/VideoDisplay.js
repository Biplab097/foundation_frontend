//import logo from './logo.svg';
import './Styles/VideoDisplay.css';
import { Component } from 'react';
import NavBar from './Navbar.js';
//import Video from 'react-native-video';
import video1 from './Videos/Adding Integration System to Project (Primavera P6).mp4'
//import Icon from 'react-native-vector-icons';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import docimage from './Images/document.png';
import image1 from './Images/1.1_Create_a_project_First_Frame.png';
import image2 from './Images/2.1_Schedule_management_First_Frame.png';
import PDFViewer from 'pdf-viewer-reactjs'
import drawings from './Documents/SMART Build Beta Workflows - Part 1 - 020321.pdf';
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
class VideoDisplay extends Component {
  constructor(){
    super();
    this.state={
      doc:true,
      // vidplayer:true
    }
  }
  docview(){
    console.log("clicked");
    this.setState({doc:!this.state.doc})
    // this.setState({vidplayer:!this.state.vidplayer})
  }
  render(){
    let docclass=this.state.doc?"video":"videochange";
    let vidplayerclass=this.state.doc?"vidplayer":"vidplayerchange";
  return (
    <div class="videodisplay">
        <div class="scroll">
          <img src={image1} class="scrollimages"/><br />
          <img src={image2} class="scrollimages"/><br />
          <img src={image1} class="scrollimages"/><br />
          <img src={image2} class="scrollimages"/><br />
          
        </div>
        <div>
            <div class={docclass}>
            <Card style={{ width: '100%',position:'relative',textAlign:'center',height:'100%'}}>
        <CardMedia class={vidplayerclass}
            className="media"
            component="video"
            height="340"
            src={video1}

            title="Contemplative Reptile" 
            controls
            autoPlay
        />
        <img src={docimage} class="docimage"  onClick={this.docview.bind(this)}/>
        <CardContent>
        <Typography gutterBottom variant="h5" component="h5">
          Video Description
        </Typography>
        
      </CardContent>
         <CardActions disableSpacing>
         <IconButton aria-label="add to favorites">
         
         </IconButton> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
       </CardActions>
      </Card>  
            </div>
          
        </div>
        <div class="pdfclass">
        {/* <Document 
        file={drawings}
        
      >
        
      </Document> */}
{/* <PDFViewer
            document={{
                url: {drawings},
            }}
        /> */}
        <Viewer fileUrl={drawings} /> 
        </div>
    </div>
  );
}
}

export default VideoDisplay;