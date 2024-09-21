import React from "react";

function Note(props) {

  function passID() {
    props.deleteNotes(props.id)
  }


  return (
      <div key={props.index} className="note" >
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={passID}>DELETE</button>
      </div>
  );
}

export default Note;
