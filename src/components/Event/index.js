import React, { useState } from "react";
import db from "../../firebaseConfig";
import EventForm from "../Eventform";
import "./style.css"
import { Card, CardDeck} from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default function Event(props) {
  const [isDisplayForm, setIsDisplayForm] = useState(false)
  const deleteEvent = () => {
    db.collection("users").doc(props.event.id).delete();
  };
  const editEvent = () => {
    setIsDisplayForm(true)
    };
    const handleSubmit = () => {
      setIsDisplayForm(false)
    }
    function toDateTime(secs) {
      const t = new Date(1970, 0, 1); // Epoch
      t.setSeconds(secs);
      const str = JSON.stringify(t)
      const onlyDate = str.split(" ");
      console.log(onlyDate);
      return onlyDate;
  }
 
  return (
 
      <Card
        bg={props.variant.toLowerCase()}
        
        text={props.variant.toLowerCase() === 'light' ? 'info': 'white'}
        style={{ width: '21rem', textAlign: 'left', float:'left', margin:'1rem'}}
        className="mb-2"
      >
        <Card.Header>{props.event.addEvent} - {props.event.category}</Card.Header>
        <Card.Body>
          <Card.Text>
          <p>Full Name:     {props.event.fullName}</p>
          <p>Category:     {props.event.category}</p>
          <p>Event Date:     {toDateTime(props.event.chooseDate.seconds)}</p> 
          <p>Event name:     {props.event.addEvent}</p>
          <p>description:     {props.event.addDescription}</p>
          <p>Collaborators:     {props.event.addCollaborators}</p>
          <p>Completed:     {props.event.chooseCompleted ? "yes":"No"}</p>
      
        
          {isDisplayForm && <EventForm {...props.event} handleSubmit = {handleSubmit}/>}
          <Button variant= {props.variant.toLowerCase() === 'light' ? 'outline-info': 'outline-light'} onClick={deleteEvent} style={{margin:'1rem'}}>Delete event</Button>
          {!props.event.chooseCompleted && <Button variant= {props.variant.toLowerCase() === 'light' ? 'outline-info': 'outline-light'} onClick={editEvent}>Edit event</Button> }
          </Card.Text>
        </Card.Body>
      </Card>
   );
  }
 