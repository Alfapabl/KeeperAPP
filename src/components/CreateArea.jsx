import React, { useState } from "react";

function CreateArea(props) {

  const [notes, setNotes] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;

    setNotes(prevNotes=> {
      return {
        ...prevNotes,
        [name] : value
      }
    })
  }

  function addData(event) {
    props.addnote(notes),
    event.preventDefault()
    setNotes({
      title:"",
      content:""
      }
    )
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} value={notes.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={notes.content}/>
        <button onClick={addData}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
