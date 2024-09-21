import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {

  const [arrayNotes, setArrayNotes] = useState([])

  function addNote(note) {
    setArrayNotes(prevNotes=>{
      return [
        ...prevNotes,
        note
      ]
    })
  }

  function deleteNotes(id) {
    setArrayNotes(prevItems=>{
     return prevItems.filter((item, index)=>{
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea addnote={addNote}/>
      {arrayNotes.map((item,index) => {
        return(<Note deleteItems={deleteNotes} id={index} key={index} title={item.title} content={item.content} deleteNotes={deleteNotes}/>)
      })}
      
      <Footer />
    </div>
  );
}

export default App;
