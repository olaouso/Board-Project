import React, { useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import db from "../../firebaseConfig";
import { Card, CardDeck} from 'react-bootstrap';

export default function EventForm(props, handler) {
  const [header, setHeader] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("work");
  const [eventDate, setEventDate] = useState(new Date());
  const [event, setEvent] = useState("");
  const [description, setDescription] = useState("");
  const [collaborators, setCollaborators] = useState("");
  const [completed, setCompleted] = useState(false);

  const addUser = (e) => {
    e.preventDefault();
    if (props.id){
      db.collection("users").doc(props.id).set({
        fullName: name,
        category: category,
        chooseDate: eventDate,
        addEvent: event,
        addDescription: description,
        addCollaborators: collaborators,
        chooseCompleted: completed,
      });
      props.handleSubmit();
      } else {
        db.collection("users").doc().set({
          fullName: name,
          category: category,
          chooseDate: eventDate,
          addEvent: event,
          addDescription: description,
          addCollaborators: collaborators,
          chooseCompleted: completed,
        
        });      
      }
      console.log(props);
      
    setName("");
    setCategory("");
    setEventDate(new Date());
    setEvent("");
    setDescription("");
    setCollaborators("");
    setCompleted(false);
    setHeader("")
  };

  return (
    <div>
     
      <form onSubmit={addUser}>
      <Card
        bg= 'light'
        text= 'info'
        style={{ width: '21rem', textAlign: 'left'}}
       
      >
        <Card.Header> Add Event </Card.Header>
        <Card.Body>
          <Card.Text>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder= {props.fullName ? props.fullName: "Full name"}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
        </div>
        <div>
          <label>Category:</label>
          <select onChange= {(e) => setCategory(e.target.value)} value={category}>
            <option value="work">Work</option>
            <option value="study">Study</option>
            <option value="entertainment">Entertainment</option>
          </select>

        </div>
        <div>
          <label>
            Due date:
            <DatePicker onChange={setEventDate} selected={eventDate}/>
          </label>
        </div>
        <div>
          <label>
            Event name:
            <input
              type="text"
              name="event"
              placeholder= {props.addEvent ? props.addEvent: "Event name"}
              onChange={(e) => setEvent(e.target.value)}
              value={event}
            />
          </label>
        </div>
        <div>
          <label>
            Event description:
            <input
              type="text"
              name="description"
              placeholder= {props.addDescription ? props.addDescription: "Add description"}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </label>
        </div>
        <div>
          <label>
            Collaborators:
            <input
              type="text"
              name="collaborators"
              placeholder= {props.addCollaborators ? props.addCollaborators: "Add collaborators"}
              onChange={(e) => setCollaborators(e.target.value)}
              value={collaborators}
            />
          </label>
        </div>
        {props.id &&<div>
          <div>
            <input
              type="radio"
              name="radiobutton"
              onChange={(e) => setCompleted(e.target.value)}
              value={completed}
              checked={null}
            />
            <label> Completed </label>
          </div>
          <div>
            <input
              type="radio"
              name="radiobutton"
              value={!completed}
              onChange={(e) => setCompleted(e.target.value)}
            />
            <label> Not Completed </label>
          </div>
        </div>}
        <div>
          <input type="submit" value="Submit" />
        </div>
        </Card.Text>
        </Card.Body>
      </Card>
      </form>
    </div>
  );
}

// export default MessagesList
