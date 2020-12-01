import React from "react";
import Event from "../Event";

export default function Events(props) {
  
  return (

    <div>
      {props.events.map((event,index) => {
       let variant = ""
       if(index%2===0){
         variant="light"
       }else {
         variant ="info"
       }

        return event.chooseCompleted === false && <Event event={event} variant={variant} />;
      })}
    </div>
  );
}
