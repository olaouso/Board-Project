import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
// import aboutimg from './image/aboutimg.png';

const About = () => {
    return (
<Card className="bg-dark text-white"  style={{textAlign: 'center',fontSize:'20px'}}>
  <Card.Img src="/image/aboutimg.png" alt="Card image"  style={{ height: '100%', margin: '0', width: '100%', height: "250vh"}} />
  <Card.ImgOverlay>
    <Card.Title style={{textAlign: 'center',fontSize:'30px'}}>About Us</Card.Title>
    <Card.Text>
    This Website designed by Ola and Luey, two students from Re-coded third Bootcamp in Turkey. Visitors can enjoy our website and organize their events, also they can select the events they willing to attend and join the organizers. To contact the team please visit their accounts below.
    </Card.Text>
    <img src="/image/girlgithub.png" alt="girl" width= "50px" style={{margin:'1rem'}}></img>
      <img src="/image/boygithub.png" alt="girl" width= "50px" ></img>

  </Card.ImgOverlay>
</Card>














// <>
//     <div style={{display:'flex' }}>
     
    
//     <Card className="text-center" style={{margin:'1rem'}} width= "50px">
//     <Card.Body>
//       <Card.Title>About Us</Card.Title>
//       <Card.Text>
//       This Website designed by Ola and Luey, two students from Re-coded third Bootcamp in Turkey. Visitors can enjoy our website and organize their events, also they can select the events they willing to attend and join the organizers. To contact the team please visit their accounts below.
//       </Card.Text>
//       <img src="/image/girlgithub.png" alt="girl" width= "50px" style={{margin:'1rem'}}></img>
//       <img src="/image/boygithub.png" alt="girl" width= "50px" ></img>

//     </Card.Body>
//   </Card>
//    <img fluid src="/image/aboutimg.png"></img>
//   </div>
//  </>
    )};
export default About;